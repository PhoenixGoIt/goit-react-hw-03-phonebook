export const FindСontacts = ({onChange, filter}) => {
    return(
        <input 
        value={filter}
        onChange={(e) => onChange(e)}
        type="text"
        name="filter"
        />
    )
}