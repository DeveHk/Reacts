import React,{useState} from 'react'

export default function Abouts() {
    const [styles,cStyle]=useState({
        color: "black",
        backgroundColor: "white",
        theme:"Light"
    })
    const [them,cgnth]=useState("Active Dark Theme")
    const changeTheme = () => {
        if (styles.theme === "Light") {
            cStyle({

                color: "white",
                backgroundColor: "black",
                border:"solid white 1px",
                theme: "Dark"

            })
            cgnth("Active Light Theme")
        }
        else {
            cStyle({

                color: "black",
                backgroundColor: "white",
                theme: "Light"

            })
            cgnth("Active Dark Theme")
        }
    }
  return (
      <div style={styles}>
        <h2>About Us</h2>
          <div className="accordion" id="accordionExample" style={styles}>
              <div className="accordion-item" style={styles}>
                  <h2 className="accordion-header" id="headingOne">
                      <button style={styles} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion Item #1
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={styles}>
                  <h2 className="accordion-header" id="headingTwo">
                      <button style={styles}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Accordion Item #2
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={styles}>
                  <h2 className="accordion-header" id="headingThree">
                      <button style={styles}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Accordion Item #3
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
          </div>
          <div className="form-check form-switch">
              <input className="form-check-input" onClick={changeTheme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{them}</label>
          </div>
      </div>
  )
}
