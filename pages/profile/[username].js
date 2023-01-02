import {useRouter} from 'next/router';

const Profile = () => {
    const router = useRouter();
    return (
        <h1> hello {router.query.username}</h1>
    )
}

export default Profile