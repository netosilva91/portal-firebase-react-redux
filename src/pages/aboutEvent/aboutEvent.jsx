import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import ContentHeader from '../../common/templates/contentHeader'
import Content from '../../common/templates/content'
import Breadcrumb from '../../common/templates/breadcrumb'
import BreadcrumbItem from '../../common/templates/breadcrumbItem'
import Box from '../../common/templates/box'
import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid'

class AboutEvent extends Component {
    
    render() {

        // const { about } = this.props;

        return (
            <div>
                <ContentHeader title='Apresentaçāo'>
                    <Breadcrumb>
                        <BreadcrumbItem path='#/' label='Home' icon='home' />
                        <BreadcrumbItem label='Apresentaçāo' icon='film' />
                    </Breadcrumb>
                </ContentHeader>
                <Content>
                    <Box>
                        <form className="white" onSubmit={this.handleSubmit}>
                            <Row>
                                <Grid>  
                                    <div className="form-group">
                                        <label htmlFor="titulo">Titulo</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Titulo" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="RegistrationURL">Registration URL</label>
                                        <input type="text" className="form-control" id="RegistrationURL" placeholder="Registration URL" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="descricao">Fale um pouco sobre seu evento</label>
                                        <textarea className="form-control" rows="3" id="descricao" placeholder="Fale um pouco sobre seu evento"></textarea>
                                    </div>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid cols='6'>
                                    <div className="form-group">
                                        <label htmlFor="dataInicio">Data Inicio do Evento</label>
                                        <input type="text" className="form-control" id="dataInicio" placeholder="Data Inicio do Evento" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="dataFinal">Data Final do Evento</label>
                                        <input type="text" className="form-control" id="dataFinal" placeholder="Data Final do Evento" />
                                    </div>
                                </Grid>
                                <Grid cols='6'>
                                    <div className="bootstrap-timepicker">
                                        <div className="form-group">
                                            <label>Hora Inicio do Evento:</label>
                                            <div className="input-group">
                                                <input type="text" id="horaInicio" className="form-control timepicker" />
                                                <div className="input-group-addon">
                                                    <i className="fa fa-clock-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bootstrap-timepicker">
                                        <div className="form-group">
                                            <label>Hora Final do Evento:</label>
                                            <div className="input-group">
                                                <input type="text" id="horaFinal" className="form-control timepicker2" />
                                                <div className="input-group-addon">
                                                    <i className="fa fa-clock-o"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Row>
                            <Row>
                                <Grid>
                                    <div className="form-group">
                                        <label htmlFor="imgDestaque">Selecione a imagem de destaque</label>
                                        <input type="file" id="imgDestaque" accept="image/*" />
                                    </div>
                                </Grid>
                            </Row>
                        </form>
                    </Box>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        about: state.firebase.requested['Demo/Demo/AboutEvent'] ? state.firebase.data.Demo.Demo.AboutEvent : {"ActiveEvent" : "", "Description" : "", "EndDate" : "", "Imagem" : "", "RegistrationURL" : "" ,"StartDAte" : "" ,"Title" : "" },
    }
}

export default compose(
    connect(mapStateToProps),
    firebaseConnect([
        { path: 'Demo/Demo/AboutEvent' }
    ])
)(AboutEvent)