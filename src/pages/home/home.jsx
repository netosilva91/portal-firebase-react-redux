import React, { Component } from 'react'

import ContentHeader from '../../common/templates/contentHeader'
import Content from '../../common/templates/content'
import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid'
import Breadcrumb from '../../common/templates/breadcrumb'
import BreadcrumbItem from '../../common/templates/breadcrumbItem'
import Box from '../../common/templates/box'

class Home extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Portal App Evento' small='Versão 1.0'>
                    <Breadcrumb>
                        <BreadcrumbItem label='Home' icon='home' />
                    </Breadcrumb>
                </ContentHeader>
                <Content>
                    <Row>
                        <Grid>
                            <Box>
                                <p>Bem vindo ao portal.</p>
                            </Box>
                        </Grid>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Home