import React from 'react'
import { 
    Page,
    Row,
    Col,
    Text,
    Container,
    Input,
    Search,
    Spacer,
    Button
} from '@geist-ui/react'
import {
    Sun,
    Moon
} from '@geist-ui/react-icons'

export const Header = ({ ...props }) => {

    let displayIcon = 'null'

    if (props.themeType === 'dark') {
        displayIcon = <Moon />
    } else {
        displayIcon = <Sun />
    }

    return (
        <Page.Header>
          <Row gap={0.8} align="middle" style={{ marginBottom: '15px', marginTop: '30px' }}>
            <Col align="start">
              <Text h3>Nodekraft Resources</Text>
            </Col>
            <Col align="end">
              <Container justify="end">
                <Input auto size="small" icon={ <Search /> } placeholder="Search" />
                <Spacer x={0.5}/>
                <Button icon={displayIcon} onClick={props.switchThemes} auto size="small"></Button>
              </Container>
            </Col>
          </Row>
        </Page.Header>
    )
}