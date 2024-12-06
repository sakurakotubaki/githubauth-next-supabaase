import Image from 'next/image'
import { GithubLoginButton } from '@/components/GithubLoginButton'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Github Auth</h1>
          <GithubLoginButton />
        </div>
      </div>
    </div>
  )
}