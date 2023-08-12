'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import useStore from '../../store'
import supabase from '../../utils/supabase'

const SupabaseListener = ({ accessToken }: { accessToken?: string }) => {
  const router = useRouter()
  const { updateLoginUser } = useStore()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session)
        updateLoginUser({
          id: data.session?.user.id,
          email: data.session?.user.email,
        })
    }

    // userのセッション情報の変化を監視する（ログイン・ログアウトされる度に実行）
    supabase.auth.onAuthStateChange((_, session) => {
      updateLoginUser({ id: session?.user.id, email: session?.user.email })
      // サーバーサイドのaccessTokenとクライアントサイドのaccess_tokenが一致しない場合サーバーコンポーネントを際実行する
      if (session?.access_token !== accessToken) router.refresh()
    })

    getUserInfo()
  }, [accessToken, router, updateLoginUser])

  return null
}

export default SupabaseListener
