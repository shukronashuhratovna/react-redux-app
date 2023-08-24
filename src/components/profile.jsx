import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../service/auth";
import { Loader } from "../ui";
// import { signUserStart, signUserSuccess } from "../slice/auth";

const Profile = () => {
    const { user } = useSelector(state => state.auth)
    const [userProfile, setUserProfile] = useState()

    const getProfile = async () => {
        // dispatch(signUserStart())
        try {
            const response = await AuthService.getProfile(user.username)
            setUserProfile(response)
            console.log(userProfile);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProfile()
    }, [])


    return (
        !userProfile ? <Loader /> :
            <div className='col-md-6'>
                <div className='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                    <div className='col p-4 d-flex flex-column position-static'>
                        <strong className='d-inline-block mb-2 text-primary text-uppercase'>{userProfile.username}</strong>
                        <p className='card-text mb-auto'>articleDetail.author.bio</p>
                    </div>
                    <div className='col-auto d-none d-lg-block'>
                        <svg
                            className='bd-placeholder-img'
                            width='200'
                            height={'100%'}
                            xmlns='http://www.w3.org/2000/svg'
                            role='img'
                            aria-label='Placeholder: Thumbnail'
                            preserveAspectRatio='xMidYMid slice'
                            focusable='false'
                        >
                            <title>Placeholder</title>
                            <rect width='100%' height='100%' fill='#55595c'></rect>
                            <text x={'45%'} y={'53%'} fill={'#fff'} className='fs-2 text-uppercase p-0 m-0'>
                                articleDetail.author.username[0]
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
    )
}

export default Profile