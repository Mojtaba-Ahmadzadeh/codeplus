"use client"
import Login from '@/components/templates/login-register/Login'
import Register from '@/components/templates/login-register/Register'
import React, { useState } from 'react'
import { authTypes } from '@/utils/constants'

function page() {

    const [authType, setAuthType] = useState(authTypes.LOGIN)

    const showRegisterForm = () => setAuthType(authTypes.REGISTER)
    const showLoginForm = () => setAuthType(authTypes.LOGIN)

    return (
        <>
            {
                authType === authTypes.LOGIN ? (
                    <Login showRegisterForm={showRegisterForm} />
                ) : (
                    <Register showLoginForm={showLoginForm} />
                )
            }
        </>
    )
}

export default page