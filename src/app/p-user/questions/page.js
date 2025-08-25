
import React from 'react'
import UserPanelLayout from '@/components/layout/UserPanelLayout'
import Questions from '@/components/templates/p-user/questions/Questions'

function page() {
    return (
        <UserPanelLayout>
            <Questions />
        </UserPanelLayout>
    )
}

export default page