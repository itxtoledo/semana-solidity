// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Primitives {
    bool public boo = true;

    /*
    unsigned integer
    uint significa inteiro sem sinal, que sao os inteiros nao negativos
    diferentes tamanhos estao disponiveis
        uint8   varia de 0 ate 2 ** 8 - 1
        uint16  varia de 0 ate 2 ** 16 - 1
        ...
        uint256 varia de 0 ate 2 ** 256 - 1
    */
    uint8 public u8 = 1;
    uint256 public u256 = 456;
    uint256 public u = 123; // uint é um alias para uint256

    /*
    integer
    Números negativos são permitidos para tipos inteiros.
    Como o uint, faixas diferentes são disponíveis para o int8 até o int256
    
    int256 varia de -2 ** 255 ate 2 ** 255 - 1
    int128 varia de -2 ** 127 ate 2 ** 127 - 1
    */
    int8 public i8 = -1;
    int256 public i256 = 456;
    int256 public i = -123; // int é o mesmo que int256

    // valor minimo e maximo do int
    int256 public minInt = type(int256).min;
    int256 public maxInt = type(int256).max;

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    // Valores padroes
    // Variaveis sem atribuicao possuem valores padroes
    bool public defaultBool; // false
    uint256 public defaultUint; // 0
    int256 public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
