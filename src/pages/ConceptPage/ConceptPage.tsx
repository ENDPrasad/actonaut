import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"

function ConceptOutlinePage({children}:{children:React.ReactElement}) {

  return (
    <div>
      <NavBar />
        {children}
      <Footer />
    </div>
  )
}

export default ConceptOutlinePage