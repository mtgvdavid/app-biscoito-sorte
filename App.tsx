import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';

type Props = {};

type State = {
  textoFrase: string;
  img: ImageSourcePropType;
};

class App extends Component<Props, State> {
  frases: string[];

  constructor(props: Props) {
    super(props);

    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Um pequeno passo hoje pode abrir um grande caminho amanhã.',
      'Boas surpresas encontram quem se permite tentar.',
      'Sua próxima conquista começa com uma decisão.',
      'Nem todo desvio afasta você do destino.',
      'A sorte pode chegar disfarçada de oportunidade.',
      'Você não precisa ter todas as respostas para começar.',
      'Cultive hoje o que deseja colher amanhã.',
      'Uma conversa inesperada pode trazer uma boa ideia.',
      'Respeite seu ritmo e continue caminhando.',
      'Há coragem em tentar mais uma vez.',
      'Compartilhar alegria é uma forma de multiplicá-la.',
      'Um novo começo pode caber em um dia comum.',
      'Preste atenção: algo simples pode surpreender você.',
      'Sua gentileza pode transformar o dia de alguém.',
      'O que você aprende hoje acompanha você amanhã.',
      'Deixe espaço nos seus planos para uma boa surpresa.',
      'Às vezes, descansar também faz parte do caminho.',
      'Uma mudança pequena pode fazer uma grande diferença.',
      'Celebre o progresso que só você sabe quanto custou.',
      'Seu próximo capítulo ainda pode surpreender você.',
    ];
  }

  quebraBiscoito() {
    const numeroAleatorio = Math.floor(
      Math.random() * this.frases.length,
    );
    const frase = this.frases[numeroAleatorio];

    if (frase === undefined) {
      return;
    }

    this.setState({
      textoFrase: frase,
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
          resizeMode="contain"
        />

        <Text style={styles.textoFrase}>
          {this.state.textoFrase ? `"${this.state.textoFrase}"` : ''}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={this.quebraBiscoito}
          accessibilityRole="button"
        >
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;