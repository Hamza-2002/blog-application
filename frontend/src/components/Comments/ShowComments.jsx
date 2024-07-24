import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllComment, GetComments } from '../../Store/CreateReducres/CommentSlice'

const ShowComments = ({Id}) => {
   
    const dispatch = useDispatch()
    const ReadComments = useSelector(GetAllComment)
    console.log(ReadComments);
    useEffect(() => {
        dispatch(GetComments(Id))
    }, [])
    return (
        <table>
            {
                ReadComments && ReadComments.map((comment, index) => {
                    return (
                        <tr key={index}>
                            <td>{comment?.content}</td>
                            <td>{comment?.user?.username}</td>
                        </tr>

                    )
                })
            }
        </table>
    )
}

export default ShowComments