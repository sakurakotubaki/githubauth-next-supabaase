'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export function GithubLoginButton() {
  const [isLoading, setIsLoading] = useState(false)
  const supabase = createClientComponentClient()

  const handleGithubLogin = async () => {
    try {
      setIsLoading(true)
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: `${location.origin}/auth/callback`
        }
      })
      
      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error:', error)
      alert('ログインに失敗しました。もう一度お試しください。')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleGithubLogin}
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-2"
    >
      <Github className="w-5 h-5" />
      {isLoading ? 'Signing in...' : 'Sign in with Github'}
    </Button>
  )
}