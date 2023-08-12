import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient({ req, res })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session && req.nextUrl.pathname.startsWith('/auth/todo-crud')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}
