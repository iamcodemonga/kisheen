import MockSliderPosts from '@/components/loaders/MockSliderPosts'
import MockBanner from '@/components/loaders/MockBanner'
import MockPots from '@/components/loaders/MockPots'
import AppLaunch from '@/components/Appsoon'
import Contact from '@/components/Contactsection'

const loading = () => {
    return (
      <>
        <MockBanner />
        <MockSliderPosts />
        <MockPots />
        <AppLaunch />
        <Contact />
      </>
    )
}

export default loading