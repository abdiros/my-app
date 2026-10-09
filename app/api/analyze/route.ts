import { NextResponse } from 'next/server'

const SYSTEM_PROMPT =
  'You are an expert AI art prompt engineer. Analyze this image and write a detailed generation prompt that could recreate it in Midjourney, Stable Diffusion, or DALL-E. Include: subject description, art style, color palette, mood, lighting, composition, level of detail, and relevant quality tags. Return ONLY the prompt, no intro, no explanation.'

export async function POST(request: Request) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const apiToken = process.env.CLOUDFLARE_API_TOKEN

  if (!accountId || !apiToken) {
    return NextResponse.json(
      { error: 'Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_API_TOKEN' },
      { status: 500 }
    )
  }

  try {
    const formData = await request.formData()

    const image = formData.get('image')
    if (!(image instanceof File)) {
      return NextResponse.json(
        { error: 'Missing required "image" file field' },
        { status: 400 }
      )
    }

    const style = formData.get('style')
    const prompt =
      typeof style === 'string' && style.length > 0
        ? `${SYSTEM_PROMPT} Additional style directive: ${style}`
        : SYSTEM_PROMPT

    const arrayBuffer = await image.arrayBuffer()
    const imageBytes = [...new Uint8Array(arrayBuffer)]

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/llava-hf/llava-1.5-7b-hf`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageBytes,
          prompt,
          max_tokens: 512,
        }),
      }
    )

    const data = await response.json()

    if (!data.success) {
      const message =
        data.errors?.[0]?.message ?? 'Cloudflare AI request failed'
      return NextResponse.json({ error: message }, { status: 502 })
    }

    const description = data.result.description

    return NextResponse.json({ prompt: description })
  } catch (error) {
    console.error('analyze route error:', error)
    return NextResponse.json(
      { error: 'Unexpected error while analyzing image' },
      { status: 500 }
    )
  }
}
