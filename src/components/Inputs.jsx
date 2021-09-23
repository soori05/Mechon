import React from 'react'
import { Dropdown,InputGroup,FormControl, Button } from 'react-bootstrap'

export default function Inputs() {
    return (
        <div>
            <div><h2>The Best Cars in the world</h2></div>
            <div class="button-drop">
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu id="drop-menu" variant="dark">
                <Dropdown.Item href="#/action-1" active>
                    Action
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div class="input">
                <InputGroup id="input-box" className="mb-3">
                    
                    <FormControl
                    placeholder="Enter Mobile Number"
                    aria-label="Mobile Number"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div class="botton">
            <Button id="botton" variant="success">CHECK PRICES FOR FREE</Button>
            </div>
            <div class="row">
                    <div class="column">
                    <h3> ⭐4.1/5</h3>
                    <p>Based on true reviews</p>

                    </div>
                    <div class="column vl">
                    <h3>2,50,000+</h3>
                    <p>Happy customers</p>

            </div>
            <div class="lorem">
                <h2>Car Services Available In All Area</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </p>
            </div>

            </div>
        </div>
    )
}
