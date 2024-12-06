import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { LogoutButton } from '@/components/LogoutButton'

export default async function DashboardPage() {
  const supabase = createServerComponentClient({ cookies })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            ようこそ、{session?.user.user_metadata.full_name || 'ユーザー'}さん！
          </h1>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}