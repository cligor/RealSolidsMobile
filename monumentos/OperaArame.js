import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import next from '../images/icons/next.png';
import conversa from '../images/mascote/tales3.png';
import opera from '../images/monumentos/OPERADEARAME300.png';

let falas = [];

export default class Apresentacao extends Component {

    constructor(props) {
        super(props);
        falas = [
            'Inaugurada em 1992, é um símbolo da cidade de Curitiba. Construída no Parque das Pedreiras, a Ópera é um espaço de espetáculos de qualquer natureza.',
            'É uma obra do arquiteto Domingos Bongestabs e possui estrutura tubular e teto de policarbonato transparente.'
        ];
        this.state = { indice: 0 };
    }

    proximo() {
        if (this.state.indice < 1) {
            const i = this.state.indice;
            this.setState({ indice: i + 1 });
        } else {
            Actions.exerciciosOperaArame();
        }
    }

    render() {
        return (
            <View style={style.container}>
                <View 
                    style={
                            [style.innerContainer, 
                            { alignItems: 'center', paddingTop: 20, height: '45%', }]
                            }
                >
                    
                    <Image source={opera} />
                </View>

                <View style={[style.innerContainer, { height: '55%' }]}>
                    <ImageBackground source={conversa} style={{ flex: 1 }}>
                        <View style={style.texto}>
                            <Text style={style.fala}>
                                {falas[this.state.indice]}
                            </Text>
                        </View>

                        <View style={style.button}>
                            <TouchableOpacity onPress={() => this.proximo()}>
                                <Image source={next} size={32} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                   
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    innerContainer: {
        width: '100%',
    },

    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5cb85c',
        textAlign: 'center',
    },

    texto: {
        // borderWidth: 1,
        width: '66%',
        height: '23%',
        marginLeft: '25%',
        marginTop: '3%',
    },

    fala: {
        marginTop:16,
        fontSize: 18
    },

    button: {
        alignItems: 'center',
        paddingTop: '46%',
        marginLeft: '85%',
        borderRadius: 20,
    },
});
