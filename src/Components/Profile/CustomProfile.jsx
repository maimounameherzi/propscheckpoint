import React from 'react'
import {Card} from 'react-bootstrap'
import {data} from "../../Data"


function CustomProfile({name, username, email}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg" />
                <Card.Body>
                    <Card.Title>{data?.map(el => el.name)}</Card.Title>
                    <Card.Text>
                    {data?.map(el => el.username)}
                    <br/>
                    {data?.map(el => el.email)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CustomProfile