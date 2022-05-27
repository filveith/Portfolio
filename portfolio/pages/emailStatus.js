import {useEffect} from 'react'
import {useRouter} from 'next/router'

export default function emailStatus() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])
    
    return (
        <div>
            Thank you for contacting me :)
        </div>
    )
}