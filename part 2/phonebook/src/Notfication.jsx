const Notification = ({ message,setMessage }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message[1]} onAnimationEnd={()=> setMessage(null)}>
        {message[0]}
      </div>
    )
  }
  export default Notification