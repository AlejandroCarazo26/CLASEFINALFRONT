import "./styles.css"

const Paginador = ({page, next, prev, setPage}:{
    page: number,
    next: boolean,
    prev: boolean,
    setPage: (page: number) => void

}) => {
    return(
        <div className="containerPaginador">
            <div className={prev ? "arrow" : "arrowDisabled"}
                onClick={()=> {
                    setPage(page-1);
                }}> <p> {"<"}</p>
            </div>

            <h1>{page}</h1>

            <div className={next ? "arrow" : "arrowDisabled"} 
                onClick={()=> {
                    setPage(page+1);
                }}> <p> {">"}</p>
            </div>
        </div>
    )
}

export default Paginador;