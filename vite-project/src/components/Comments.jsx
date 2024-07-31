import React, { useState } from 'react'

const Comments = ({comments}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [save, setSave] = useState(true)
    //const [loading, setLoading] = useState(false)
  return (
    <div className='comments'>
        <h2>Leave a Reply</h2>
        <form>
            <input type="text" required placeholder='Name'
            value={name} onChange={e => setName(e.target.value)} autoComplete='off'/>
            <input type="email" required placeholder='Email'
            value={email} onChange={e => setEmail(e.target.value)} autoComplete='off'/>
            <textarea cols="30" rows="5" placeholder="comment" required value={comment}
            onChange={e =>setComment(e.target.value)} autoComplete='off'/>
            <div className='check'>
                <input type="checkbox" id="chk" onChange={e => setSave(e.target.checked)} checked={save}/>
                <label htmlFor="chk">Save my email for next time</label>
            </div>
        </form>
        <div>
            {
                comments?.map(comment => (
                    <div className='content' key={comment.id}>
                        <strong>
                            <i className='fa-solid fa-user'></i>
                            {comment.name} {comment.email}
                        </strong>
                        <p>{comment.comment}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comments