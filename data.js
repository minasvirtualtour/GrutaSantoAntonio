var APP_DATA = {
  "scenes": [
    {
      "id": "0-trilha",
      "name": "Trilha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.6453122137347229,
        "pitch": -0.030707193932091315,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 1.4055395125138546,
          "pitch": 0.14534135404516135,
          "rotation": 0.7853981633974483,
          "target": "1-chegada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3096509174597166,
          "pitch": -0.11735859168697971,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-chegada",
      "name": "Chegada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.4424717398483651,
        "pitch": 0.04370057687924955,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": 0.25780258994765504,
          "pitch": 0.1240326648043748,
          "rotation": 0,
          "target": "2-passarela"
        },
        {
          "yaw": 2.905188603583138,
          "pitch": -0.08041480161908865,
          "rotation": 0,
          "target": "0-trilha"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9797362010388007,
          "pitch": 0.4533503792621989,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Passarela</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Para preservar a Gruta de Santo Antônio como um ponto turístico após a construção da represa do Funil, o consórcio Funil tomou a iniciativa de construir uma passarela de metal. </font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Essa passarela liga a entrada terrestre da gruta ao seu interior, permitindo que os visitantes ainda possam explorar a gruta.</font></font></font></font><br>"
        }
      ]
    },
    {
      "id": "2-passarela",
      "name": "Passarela",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -2.27427096675998,
        "pitch": -0.17062601663390886,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -2.4036324579852746,
          "pitch": 0.0498585444590276,
          "rotation": 6.283185307179586,
          "target": "3-dentro"
        },
        {
          "yaw": -0.1703767946900001,
          "pitch": 0.039008803839635675,
          "rotation": 5.497787143782138,
          "target": "1-chegada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0238007944091994,
          "pitch": 0.14537161946346977,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Represa do Funil</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">A construção da represa do Funil, projetada para geração de energia e controle de inundações, realizada na submersão parcial da Gruta de Santo Antônio. </font></font></font><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Apesar da mudança no estado original da gruta, a inundação criou uma nova forma de exploração, permitindo aos visitantes uma experiência única de navegação</font></font></font></font><br>"
        }
      ]
    },
    {
      "id": "3-dentro",
      "name": "dentro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 2.8012545993578986,
        "pitch": 0.3337814052633199,
        "fov": 1.2038499345169202
      },
      "linkHotspots": [
        {
          "yaw": -0.3961209023028047,
          "pitch": 0.0471876207037667,
          "rotation": 0,
          "target": "2-passarela"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.281443819835137,
          "pitch": 0.04326846057502465,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Capela de Santo antônio</font></font></font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Após a construção da representação do Funil, a representação original de Santo Antônio, que deu nome à gruta, foi submersa. Mas, mantendo a tradição do local, uma nova foto foi colocada ao final de uma passarela. Embora simples, a capela tem uma atmosfera de paz e tranquilidade que atrai tantos devotos do santo visitantes quanto que desejam fazer uma visita agradável.</font></font>"
        },
        {
          "yaw": -2.8170420193428267,
          "pitch": 0.22263838813567993,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Pequenas embarcações</font></font><br>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">A represa do Funil transformou a gruta em um cenário perfeito para navegação. Os visitantes podem explorar o interior da gruta com pequenas embarcações, proporcionando uma experiência única e memorável.</font></font>"
        }
      ]
    }
  ],
  "name": "Gruta de Santo Antônio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
