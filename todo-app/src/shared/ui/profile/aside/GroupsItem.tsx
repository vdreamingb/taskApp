import { useNavigate } from "react-router-dom"

type GroupsItemType = {
    path: string
}

const GroupsItem = ({path}:GroupsItemType):React.JSX.Element => {
    const navigate = useNavigate()

    function onClick(path: string){
        navigate("/")
        navigate(`/profile/groups/${path}`)
    }
    
    return <li className="groups-item">
        <button onClick={() => onClick(path)} className="groups-item__link">{path}</button>
    </li> 
}

export default GroupsItem