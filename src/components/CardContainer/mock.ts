import { CardContainerProps } from '.';

export default {
  className: 'portfolio',
  cardList: [
    {
      id: '1',
      cardName: 'Logo',
      cardLogo: 'https://picsum.photos/200',
      cardText: `<p>Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>, useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a> no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu. <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">Eos ex tincidunt necessitatibus, timeam theophrastus mel cu</a>. La.</p>
      `,
      className: 'cardUp',
    },
    {
      id: '2',

      cardLogo: 'https://picsum.photos/200',
      cardName: 'Logo',
      cardText: `<p>Testando o efeito de destaque nas <span>palavras escolhidas</span> para o efeito de hover no card <span>bem</span> feito, pois essa sessão é muito importante. Devemos aproveitar nosso tempo <span>nos livros</span>, pois a leitura é muito envolvente e a cada passo dado <span>nos ajudam a melhorar.</span></p>
        `,
      className: 'cardRight',
    },
    {
      id: '3',
      cardLogo: 'https://picsum.photos/200',
      cardName: 'Logo',
      cardText: `<p>Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>, useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a> no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu. <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">Eos ex tincidunt necessitatibus, timeam theophrastus mel cu</a>. La.</p>
      `,
      className: 'cardLeft',
    },
    {
      id: '4',
      cardLogo: 'https://picsum.photos/200',
      cardName: 'Logo',
      cardText: `<p>Nostro <strong>definitiones</strong> (<i>React</i>) sed cu - <u>Otávio Miranda</u>. Sea <code>useEffect</code>, useState dicat fabulas <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">consetetur</a> no, odio deseruisse assueverit mei eu, vis probo nonumes molestie id. Ipsum movet liberavisse an mea, diceret vituperata ne his, delenit apeirian quo ea. Imperdiet percipitur te eos. Per ludus aliquam cu. <a href="https://gist.github.com/luizomf/e7cf0c3d172801225cce694681ecb0ad">Eos ex tincidunt necessitatibus, timeam theophrastus mel cu</a>. La.</p>
      `,
      className: 'cardDown',
    },
  ],
} as CardContainerProps;
