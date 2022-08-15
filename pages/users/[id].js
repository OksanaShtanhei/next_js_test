import {useRouter} from "next/router"
import MainContainer from "../../components/MainContainer"
import styles from '../../styles/User.module.scss'

export default function User ({user}){
    const {query} = useRouter()
   
    return(
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h3>user with ID {query.id}</h3>
                <div>Name - {user.name}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user},
    }
}