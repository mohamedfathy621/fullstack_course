const Filter =({filter,changefilter})=>{
    return(
      <div>
      filter shown with: <input  value={filter} onChange={changefilter}/>
    </div>
    )
  }
export default Filter;