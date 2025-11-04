import { useNavigate } from "react-router-dom"

type GroupsItemType = {
    path: string,
    id: number
}

const GroupsItem = ({path, id}:GroupsItemType):React.JSX.Element => {
    const navigate = useNavigate()

    function onClick(path: string){
        navigate("/")
        navigate(`/profile/groups/${path}/${id}`)
    }
    
    return <li className="groups-item">
        <button onClick={() => onClick(path)} className="groups-item__link">{path}</button>
    </li> 
}

export default GroupsItem