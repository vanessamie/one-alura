# Regex

Regex, conceitos aprendidos e aplicados durante Trilha Front-End, curso:
- Expressões regulares: capturando textos de forma mágica.

##

- https://vanessamie.github.io/regex/

##

## Conceitos aprendidos e aplicados:

- Regex Engine;
- Regex;
- Meta-char:
  - \d - qualquer dígito numérico;
  - . "ponto" - qualquer char;
  - * "asterisco";
  - ? "interrogação";
  - \s - whitespace;
  - \t - tab;
  - \r - carriage return;
  - \n - newline;
  - \f - form feed;
  - \w - wordchar;
  - ^ "circunflexo";
  - $ "cifrão";
  - \b - word boundary;
  - \B - Non word boundary;
  - (?:) - Non-capturing groups;
  - | - pipe;


- \ ("escapa" qualquer char):
- \. (ponto literal);
- \* (asterisco literal);
- \( (abre parênteses literal);
- [()\/-] (dentro dos colchetes não são meta-char);
- () (um regex entre parênteses e com a opção "Mostra grupo" selecionada mostra em "Matches" os grupos desejados);
- (?:) (Não deve devolver o grupo que estiver entre parênteses e após "?:");
- | (ou, utilizado para selicionar uma coisa ou outra);
- 


- Quantifier:
  - "?" - zero ou uma vez;
  - "*" - zero ou mais vezes;
  - "+" - uma ou mais vezes;
  - {n} - exatamente n vezes;
  - {n,} - no mínimo n vezes;
  - {n,m} - no mínimo n vezes, no máximo m vezes;


- Classes:
  - \d == [0-9];
  - \s == \t \r \n \f;
  - [A-Z] - caracter de A a Z;
  - [123] == 1, 2 ou 3;
  - [^,]+ - qualquer caracter != ",";
  - \w == [A-Za-z0-9_];
  - 


- Âncoras (marcam uma posição específica no alvo, não podem ser utilizadas com quantifiers):
  - \b - deve ser colocado no início e no final, para localizar algo específico;
  - ^ - colocado no início, para determinar o início da string alvo;
  - $ - colocado no final, para determinar o final da string alvo;
  - \B - deve ser colocado no início e final, para localizar uma sílaba dentro de uma palavra;


##

## Exemplos de Regex:

- Buscar CNPJ ou CPF:
\d{2,3}[\/.-]?\d{3}[\/.-]?\d{3}[\/.-]?\d{2,4}[\/-]?\d{0,2}


- Telefone geral:
[(]?\d{2}[)-.]?\d{3,5}[-.]?\d{3,4}[-.]?\d{0,3}


- Classe definida. Exemplo: 1 a 3 e 6 a 9 ||
[1-36-9] || [A-Za-zç]


- Data com mês por extenso (22 de Abril de 1987)
[0123]?\d\s+(de\s+)?[A-Z][a-zç]{1,8}\s+(de\s+)?[12]\d{3}


- Data geral (22/04/1987, 22.04.1987, 22/4/87, 22.4.87, 1-01-2017)
[0123]?\d[\/.-]?\d+[\/.-]?[12]?\d{1,3}


- Horário geral (19h32min16s 19h32m16s, 1:3:1 1'32'16 19h32)
\d+[h:';.-]?\d+[a-z]*[':;.-]?\d*[a-z]*


- Placa de Automóveis Antiga ou Padrão Mercosul
[A-Z]{3}-?\d?[A-Z]?\d{2,4}


- Utilização de \b
\bde\b (vai localizar somente "de" isolado)


- Utilização de \B
\Bde\B (vai localizar somente "de" dentro das palavras)


- Variáveis no JavaScript:
  - Exemplo: 22 de Abril de 1987
  
    const DIA  = "[0123]?\d"; 
    const _DE_ = "\s+de\s+";
    const MES  = "[A-Za-z][a-zç]{1,8}";
    const ANO  = "[12]\d{3}";

    let stringRegex = DIA + _DE_ +  MES + _DE_ + ANO;

    let objetoRegex  = new RegExp(stringRegex, 'g');


- Extraindo usuários de e-mail's válidos
  - O email deve ter um @ e terminar com caelum.com.br ou alura.com.br;
  - O nome do usuário (tudo antes do @) tem apenas letras minúsculas, pode ter um número no final;
  - Tem de 5 a 15 caracteres.

([a-z.]{4,14}[a-z\d])@(?:caelum.com.br|alura.com.br)

- Validação de qualquer e-mail
^([\w-]\.?)+@([\w-]+\.)+([A-Za-z]{2,4})+$


- Selecionar grupos:
  - Nome Completo;
  - Endereço e número;
  - Cep;
  Exemplo:
    - Entrada: Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro
    - Saída: Leonardo Cordeiro|01/01/1995|Rua de Campo Grande|01|00001-234|Rio de Janeiro ||| Leonardo Cordeiro ||| Rua de Campo Grande ||| 01 ||| 00001-234

^([\w\s]+)\|(?:\d\d\/\d\d\/\d\d\d\d)\|([\w\s]+)\|(\d{1,4})\|(\d{5}-\d{3})\|(?:[\w\s]{10,})$




##

#### Observações

###### Regex Engine desenvolvido e disponibilizado pelo instrutor, não o modifiquei, pois o intuito do curso era aprender a regex e não desenvolver o Regex Engine.

Em caso de sugestão ou alguma alteração, fiquem a vontade para entrar em contato! Toda contribuição é bem-vinda!

Gratidão a ONE, Alura e Instrutor ..

##

### Materiais interessantes:

- Regex- Engine
(Software paraa interpretar e aplicar a regex.)
https://s3.amazonaws.com/caelum-online-public/regex/regex-engine.png

- Cálculo do Dígito Verificador para CPF e CGC
http://www.goulart.pro.br/cbasico/Calculo_dv.htm

- Cálculo Dígito Módulo 11
https://www.cjdinfo.com.br/utilitario-calculo-digito-modulo-11



