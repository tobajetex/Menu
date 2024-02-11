import ContentFilterIncubator from './ContentFilterIncubator'
const App = () => {
  return (
    <div className="container px-5 py-5">
      <div className="row justify-content-center mb-3">
        <h2 className="col-auto">Menu</h2>
        <div className="col-12"></div>
        <span
          className=" col-2 bg-success"
          style={{ height: '5px', width: '100px' }}
        ></span>
      </div>

      <ContentFilterIncubator />
    </div>
  )
}
export default App
