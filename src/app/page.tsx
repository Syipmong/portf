import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '2.5em', marginBottom: '20px' }}>Welcome to Our Website</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>
        We provide high quality products and services. Explore more to find out!
      </p>
      <Button>Explore More</Button>
    </div>
  )
}