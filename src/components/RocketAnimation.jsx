import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function RocketAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <DotLottieReact
        src="https://lottie.host/55b0609a-25bf-40ed-a3cd-ae6398716973/yaXW0gv1px.lottie"
        loop
        autoplay
        style={{ width: '100%', height: '100%', maxWidth: '500px' }}
      />
    </div>
  )
}