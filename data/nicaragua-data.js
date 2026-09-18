// ====================================================
// NICARAGUA VIVA — Base de Datos Turística
// Fuentes: INTUR, UNESCO, Wikipedia, mapanicaragua.com
// ====================================================

const NICARAGUA_DATA = {

  regions: [
    {
      id: "pacifico",
      name: "Región del Pacífico",
      description: "Donde el mar Pacífico abraza la tierra de volcanes. Aquí están las ciudades coloniales, el bullicio de los mercados, el olor a tortilla caliente y el horizonte roto por cráteres que todavía respiran.",
      color: "#2D6A4F",
      image: "https://viajandocongabriel.com/wp-content/uploads/2023/05/1920x1080_aerials_beach2-e1683310503950.jpg",
      activities: ["Volcanes", "Playas", "Ciudades coloniales", "Artesanía", "Surf"],
      departments: ["managua", "masaya", "granada", "carazo", "rivas", "leon", "chinandega"]
    },
    {
      id: "centro",
      name: "Región Central",
      description: "El corazón verde de Nicaragua. Montañas que guardan niebla, fincas de café que perfuman el aire, ríos que serpentean entre bosques y pueblos donde el tiempo parece moverse más despacio.",
      color: "#40916C",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxReZ52aJBD3GkdYcbl0be83jcu_t6eCYb830IvH-Wg&s=10",
      activities: ["Senderismo", "Café", "Agroturismo", "Naturaleza", "Observación de aves"],
      departments: ["esteli", "madriz", "nueva-segovia", "jinotega", "matagalpa", "boaco", "chontales"]
    },
    {
      id: "caribe",
      name: "Costa Caribe",
      description: "Otro Nicaragua. Un ritmo diferente, un mar turquesa, lenguas distintas, sabores con coco. Aquí el mundo se abre hacia el Atlántico y la cultura se mezcla entre raíces miskitas, creoles y garífunas.",
      color: "#1B4332",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVL0jVD_Il3iyotM38Nsa5QJ6-S0hXkBosoyWG235Qw&s=10",
      activities: ["Playa", "Buceo", "Cultura indígena", "Naturaleza selvática", "Gastronomía caribeña"],
      departments: ["costa-caribe-norte", "costa-caribe-sur"]
    }
  ],

  departments: [
    {
      id: "managua",
      name: "Managua",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "La capital que no duerme, pero que también tiene sus silencios.",
      description: "Managua es más que el desorden de una capital. Es el punto de partida de todo y, sin quererlo, también un destino. Tiene lago, tiene historia, tiene mercados donde se puede comer mejor que en muchos restaurantes. Después del terremoto de 1972, la ciudad se reinventó de afuera hacia adentro. Hoy convive entre lo moderno y lo que quedó de pie.",
      climate: "Cálido tropical seco, entre 28°C y 36°C",
      tourismTypes: ["Cultural", "Histórico", "Gastronómico", "Urbano"],
      landscape: "Costa del Lago Xolotlán, planicie urbana con zonas verdes",
      highlights: ["Puerto Salvador Allende", "Teatro Nacional Rubén Darío", "Laguna de Tiscapa", "Centro histórico"],
      color: "#E76F51",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9DrXMwNz_arMp37Zla3V-wJTtCCnhDOAeM9ATRDmgw&s=10",
      attractions: [
        {
          name: "Puerto Salvador Allende",
          type: "Cultural",
          description: "El malecón de Managua a orillas del Lago Xolotlán. Restaurantes, artesanías, espectáculos y el lago enorme al fondo. El lugar donde los managuas salen a pasear cuando el sol baja.",
          activities: ["Gastronomía", "Paseo lacustre", "Cultura"],
          tags: ["cultura", "gastronomia"]
        },
        {
          name: "Teatro Nacional Rubén Darío",
          type: "Cultural",
          description: "El principal teatro del país, nombrado en honor al mayor poeta de Nicaragua. Ha sido escenario de conciertos, óperas y espectáculos desde 1969.",
          activities: ["Arte", "Cultura", "Arquitectura"],
          tags: ["cultura", "historia"]
        },
        {
          name: "Laguna de Tiscapa",
          type: "Naturaleza",
          description: "Una laguna volcánica en pleno corazón de la ciudad, dentro del Parque Histórico Nacional Loma de Tiscapa. Ofrece vistas panorámicas de Managua y del lago.",
          activities: ["Canopy", "Senderismo", "Fotografía"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Centro Histórico",
          type: "Historia",
          description: "Las ruinas de la Catedral de Managua, la Plaza de la República y el Palacio Nacional de la Cultura conviven entre espacios abiertos que cuentan lo que el terremoto de 1972 dejó y lo que la ciudad reconstruyó.",
          activities: ["Historia", "Fotografía", "Cultura"],
          tags: ["historia", "cultura"]
        }
      ],
      gastronomy: [
        {
          name: "Nacatamal",
          description: "La cocina nicaragüense tiene muchos platos, pero el nacatamal es el ritual del fin de semana. Masa de maíz, carne de cerdo o pollo, arroz, papas, vegetales y especias, todo envuelto en hoja de plátano y cocinado al vapor por horas.",
          ingredients: ["Masa de maíz", "Cerdo o pollo", "Arroz", "Papas", "Chiltoma", "Hoja de plátano"],
          where: "Mercado Oriental, comedores populares, casas particulares los fines de semana"
        },
        {
          name: "Gallo Pinto",
          description: "Base de la alimentación diaria. Arroz y frijoles rojos fritos juntos, con su propio sabor que varía según quien lo cocine. Simple y fundamental.",
          ingredients: ["Arroz", "Frijoles rojos", "Cebolla", "Chiltoma", "Ajo"],
          where: "En cualquier comedor o restaurante de la ciudad"
        }
      ],
      activities: ["Paseos en el malecón", "Visitas culturales", "Gastronomía urbana", "Compras en mercados", "Teatro y espectáculos"],
      culture: "Managua es el punto de confluencia de toda Nicaragua. Aquí llegan las tradiciones de todos los departamentos y conviven en mercados, barrios y fiestas. La Purísima de diciembre convierte las calles en un ritual de luces, pólvora y altares.",
      experiences: [
        "Ver el amanecer sobre el Lago Xolotlán desde el malecón",
        "Comer un nacatamal en el Mercado Oriental un domingo",
        "Visitar el Centro Histórico al atardecer",
        "Escuchar música en vivo en Puerto Salvador Allende",
        "Conocer el Palacio Nacional de la Cultura"
      ],
      tags: ["cultura", "historia", "gastronomia", "urbano"]
    },

    {
      id: "masaya",
      name: "Masaya",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "La cuna del folclor. El olor a barro y a copal.",
      description: "Masaya huele a barro mojado, a madera trabajada a mano, a copal en los altares. Es el departamento donde Nicaragua se mira a sí misma con más orgullo. Las artesanas tejen hamacas que van a dar a todo el mundo, los bailarines de El Torovenado ensayan en las calles y el volcán activo que lleva el nombre de la ciudad respira desde el centro de un parque nacional.",
      climate: "Cálido tropical, entre 26°C y 33°C",
      tourismTypes: ["Cultural", "Artesanal", "Naturaleza", "Gastronómico"],
      landscape: "Volcán activo, laguna, terrenos planos y vegetación tropical",
      highlights: ["Volcán Masaya", "Mercado de Artesanías", "Laguna de Apoyo", "Catarina"],
      color: "#F4A261",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vy41_TituZt3jrvypja-7shT7SyTZSffOewMhO98og&s=10",
      attractions: [
        {
          name: "Parque Nacional Volcán Masaya",
          type: "Naturaleza",
          description: "Uno de los pocos volcanes del mundo donde se puede llegar en vehículo hasta el borde del cráter activo. De noche, el resplandor de la lava en el cráter Santiago es uno de los espectáculos más impresionantes de Centroamérica.",
          activities: ["Senderismo", "Observación del cráter", "Fotografía nocturna"],
          tags: ["naturaleza", "aventura", "volcanes"]
        },
        {
          name: "Mercado Nacional de Artesanías",
          type: "Cultural",
          description: "El mercado de artesanías más importante de Nicaragua. Hamacas tejidas a mano, cerámica, cuero, madera tallada, ropa bordada. Un laberinto de colores donde cada puesto tiene su historia.",
          activities: ["Compras", "Cultura", "Fotografía"],
          tags: ["cultura", "artesania"]
        },
        {
          name: "Laguna de Apoyo",
          type: "Naturaleza",
          description: "Una laguna cratérica de aguas cristalinas y temperatura perfecta. Reserva Natural con una biodiversidad única. El lugar ideal para nadar, practicar kayak o simplemente quedarse quieto mirando el agua.",
          activities: ["Natación", "Kayak", "Paddle board", "Observación de aves"],
          tags: ["naturaleza", "aventura", "playa"]
        },
        {
          name: "Pueblo de Catarina",
          type: "Cultural",
          description: "Desde el mirador de Catarina se tiene una de las mejores vistas de la Laguna de Apoyo. El pueblo también es conocido por sus viveros de plantas, flores y jardines.",
          activities: ["Senderismo", "Fotografía", "Compra de plantas"],
          tags: ["cultura", "naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Güirilas con queso y crema",
          description: "Tortillas de maíz tierno cocidas en comal, suaves y ligeramente dulces. Se sirven con queso fresco y crema. Una de las preparaciones más características de Masaya.",
          ingredients: ["Maíz tierno", "Sal", "Queso fresco", "Crema"],
          where: "Mercados locales y comedores del centro de Masaya"
        },
        {
          name: "Cosas de horno",
          description: "Panes, rosquillas, polvorones y biscochos de maíz horneados en leña. Cada pueblo de Masaya tiene su propia versión de estos dulces y panes tradicionales.",
          ingredients: ["Harina de maíz", "Mantequilla", "Queso", "Azúcar"],
          where: "Panaderías artesanales en Masaya, Niquinohomo y pueblos vecinos"
        }
      ],
      activities: ["Compras de artesanías", "Senderismo en el volcán", "Natación en la laguna", "Turismo cultural", "Observación de folclor"],
      culture: "Masaya es la capital cultural de Nicaragua. La danza El Torovenado, los bailes de diablos y la Noche de Agüizotes (la noche más oscura del año antes del Día de Muertos) son expresiones únicas que no se repiten igual en ningún otro lugar del país.",
      experiences: [
        "Ver el cráter del Volcán Masaya de noche",
        "Comprar una hamaca tejida a mano en el mercado",
        "Bañarse en la Laguna de Apoyo",
        "Ver el atardecer desde Catarina",
        "Probar güirilas recién hechas en el mercado"
      ],
      tags: ["cultura", "naturaleza", "artesania", "volcanes"]
    },

    {
      id: "granada",
      name: "Granada",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "La Gran Sultana. La más antigua, la más orgullosa.",
      description: "Granada tiene esa arrogancia suave de las ciudades que saben que llevan siglos siendo las más bellas del continente. Fue fundada en 1524 y nunca ha dejado de serlo. Sus calles de adoquín, sus iglesias de colores pastel, sus casonas coloniales con balcones y el lago enorme a sus espaldas forman una postal que parece inventada pero es completamente real.",
      climate: "Cálido tropical, entre 27°C y 34°C",
      tourismTypes: ["Cultural", "Histórico", "Naturaleza", "Gastronómico"],
      landscape: "Orillas del Lago Cocibolca, arquitectura colonial, volcán Mombacho",
      highlights: ["Centro histórico", "Isletas de Granada", "Volcán Mombacho", "Lago Cocibolca"],
      color: "#E9C46A",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VIUdLwC1RENImjKiKq_z_hvFBuYksF8gVuRVk_oatQ&s=10",
      attractions: [
        {
          name: "Centro Histórico Colonial",
          type: "Historia",
          description: "Granada conserva uno de los centros históricos coloniales mejor preservados de América Central. La Catedral de Granada, el Convento San Francisco con sus petroglifos precolombinos, el Parque Central y las calles de colores. Todo junto y caminable.",
          activities: ["Visita cultural", "Fotografía", "Historia"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Isletas de Granada",
          type: "Naturaleza",
          description: "365 islotes formados por la erupción del Volcán Mombacho hace miles de años, dispersos en el Lago Cocibolca. Se recorren en lancha y algunos tienen casas, jardines y vida propia.",
          activities: ["Paseo en lancha", "Kayak", "Pesca", "Fotografía"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Reserva Natural Volcán Mombacho",
          type: "Naturaleza",
          description: "Un volcán dormido cubierto por bosque nuboso que ofrece una de las mejores experiencias de senderismo del país. Desde la cima, con suerte y sin nubes, se ven las Isletas, el lago y hasta el Volcán Concepción en Ometepe.",
          activities: ["Senderismo", "Canopy", "Observación de aves", "Fotografía"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Lago Cocibolca (Gran Lago de Nicaragua)",
          type: "Naturaleza",
          description: "El lago más grande de Centroamérica y el décimo noveno del mundo. Desde Granada se puede salir al lago en lancha, visitar las isletas o simplemente ver el atardecer desde el malecón.",
          activities: ["Paseo en lancha", "Pesca", "Kayak", "Observación de tiburones de agua dulce"],
          tags: ["naturaleza", "aventura"]
        }
      ],
      gastronomy: [
        {
          name: "Vigorón",
          description: "El plato más emblemático de Granada. Yuca cocida, chicharrón de cerdo crujiente y una ensalada de repollo con tomate y chile, todo servido sobre una hoja de plátano. Sencillo, contundente y difícil de olvidar.",
          ingredients: ["Yuca", "Chicharrón de cerdo", "Repollo", "Tomate", "Chile", "Vinagre"],
          where: "Mercado Municipal de Granada, comedores del parque central"
        },
        {
          name: "Baho",
          description: "Carne de res, yuca, plátano verde y maduro cocinados juntos al vapor dentro de hojas de plátano. Un plato de paciencia y sabor profundo, tradicional de los fines de semana.",
          ingredients: ["Carne de res", "Yuca", "Plátano verde", "Plátano maduro", "Hojas de plátano"],
          where: "Comedores locales y casas de familia los fines de semana"
        }
      ],
      activities: ["Turismo colonial", "Paseos en isletas", "Senderismo en Mombacho", "Kayak en el lago", "Gastronomía local"],
      culture: "Granada fue pirateada, quemada y reconstruida varias veces. Esa historia turbulenta le dio un carácter particular: una ciudad orgullosa de lo que conserva. El Convento San Francisco alberga una de las colecciones de petroglifos precolombinos más importantes de Nicaragua.",
      experiences: [
        "Pasear en coche de caballo por el centro histórico",
        "Ver el atardecer desde el Cementerio General (uno de los más hermosos de Centroamérica)",
        "Recorrer las Isletas en lancha",
        "Comer vigorón en hoja de plátano en el mercado",
        "Subir al Volcán Mombacho"
      ],
      tags: ["historia", "cultura", "naturaleza", "gastronomia"]
    },

    {
      id: "carazo",
      name: "Carazo",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "Brisa fresca, café y la playa más cercana a la capital.",
      description: "Carazo es el departamento que los managuas descubrieron cuando buscaban un poco de fresco. A poca altura del nivel del mar, sus mesetas tienen un clima más suave que el de la capital y sus playas del Pacífico son de las más accesibles desde Managua. Jinotepe y Diriamba tienen su propio carácter, sus propias fiestas y su propio orgullo.",
      climate: "Templado en las mesetas (22°C-28°C), cálido en la costa",
      tourismTypes: ["Playa", "Cultural", "Gastronómico", "Descanso"],
      landscape: "Mesetas, acantilados, playas del Pacífico",
      highlights: ["Playa La Boquita", "Playa Casares", "Diriamba", "Jinotepe"],
      color: "#8ECAE6",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800",
      attractions: [
        {
          name: "Playa La Boquita",
          type: "Playa",
          description: "Una de las playas más populares de Carazo, con oleaje fuerte del Pacífico y ambiente de fin de semana. Arena oscura típica del Pacífico nicaragüense.",
          activities: ["Natación", "Surf", "Pesca", "Gastronomía de mariscos"],
          tags: ["playa", "aventura"]
        },
        {
          name: "Playa Casares",
          type: "Playa",
          description: "Playa con características más tranquilas, utilizada principalmente por pescadores locales. Conocida por sus mariscos frescos directamente de las lanchas.",
          activities: ["Pesca", "Gastronomía", "Descanso"],
          tags: ["playa", "gastronomia"]
        },
        {
          name: "Diriamba",
          type: "Cultural",
          description: "Ciudad conocida por las Fiestas de San Sebastián en enero, una de las expresiones del folclor más antiguas del país. El Güegüense o Macho Ratón, obra declarada Patrimonio de la Humanidad por UNESCO, tiene su representación más auténtica aquí.",
          activities: ["Turismo cultural", "Fiestas patronales", "Historia"],
          tags: ["cultura", "historia"]
        },
        {
          name: "Jinotepe",
          type: "Cultural",
          description: "Capital departamental con arquitectura colonial, mercado activo y clima agradable. Conocida por ser un punto de tránsito hacia las playas, pero con vida propia.",
          activities: ["Gastronomía", "Cultura", "Compras"],
          tags: ["cultura"]
        }
      ],
      gastronomy: [
        {
          name: "Mariscos del Pacífico",
          description: "Camarones, pescado, cangrejos y mariscos frescos. La cercanía del océano Pacífico hace que los mariscos sean frescos y abundantes en las playas y comedores de Carazo.",
          ingredients: ["Camarones", "Pescado", "Cangrejo", "Limón", "Ajo"],
          where: "Comedores de Playa La Boquita y Playa Casares"
        },
        {
          name: "Rosquillas y rosquetes",
          description: "Panes de maíz horneados, crujientes, con queso seco rallado por encima. Una tradición de las panaderías de Diriamba y Jinotepe.",
          ingredients: ["Harina de maíz", "Queso seco", "Mantequilla"],
          where: "Panaderías artesanales de Jinotepe y Diriamba"
        }
      ],
      activities: ["Surf y natación en playas del Pacífico", "Turismo cultural en Diriamba", "Senderismo", "Gastronomía de mariscos"],
      culture: "Diriamba guarda el Güegüense o Macho Ratón, la obra de teatro más antigua de América precolombina y colonial. Declarada Patrimonio de la Humanidad por UNESCO en 2005, es una sátira social con danzas, máscaras y música que mezcla lo indígena y lo colonial.",
      experiences: [
        "Ver las fiestas patronales de San Sebastián en Diriamba en enero",
        "Comer mariscos frescos en la playa",
        "Conocer el baile del Güegüense",
        "Ver el atardecer sobre el Pacífico",
        "Probar rosquillas artesanales recién horneadas"
      ],
      tags: ["playa", "cultura", "historia", "gastronomia"]
    },

    {
      id: "rivas",
      name: "Rivas",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "Dos volcanes en el lago más grande de Centroamérica.",
      description: "Rivas tiene algo que ningún otro departamento de Nicaragua tiene: la Isla de Ometepe. Una isla dentro del lago más grande de Centroamérica, formada por dos volcanes, con más petroglifos precolombinos de los que una persona puede contar. Y como si eso fuera poco, también tiene San Juan del Sur, un pueblo de surf y atardeceres que nadie olvida.",
      climate: "Cálido tropical, entre 27°C y 36°C",
      tourismTypes: ["Naturaleza", "Aventura", "Playa", "Cultural"],
      landscape: "Isla volcánica, lago de agua dulce, playas del Pacífico",
      highlights: ["Isla de Ometepe", "San Juan del Sur", "Playas del Pacífico", "Volcanes Concepción y Maderas"],
      color: "#52B788",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5L3cHfK4DkguUOoqlQalnMkj1Ld3-GPWGGLKYNXXUQ&s",
      attractions: [
        {
          name: "Isla de Ometepe",
          type: "Naturaleza",
          description: "La isla volcánica más grande del mundo dentro de un lago de agua dulce. Dos volcanes —el Concepción (activo) y el Maderas (dormido)— forman una silueta única. La isla tiene petroglifos precolombinos, reservas naturales, playas de lago y un ritmo de vida que parece detenido en otro tiempo.",
          activities: ["Senderismo a volcanes", "Kayak", "Visita a petroglifos", "Naturaleza", "Playa de lago"],
          tags: ["naturaleza", "aventura", "historia"]
        },
        {
          name: "San Juan del Sur",
          type: "Playa",
          description: "Un pueblo de pescadores convertido en uno de los destinos de playa más reconocidos de Nicaragua. Surf, atardeceres sobre el Pacífico, un Cristo monumental en lo alto del cerro y una comunidad que vive en función del mar.",
          activities: ["Surf", "Natación", "Observación de tortugas", "Paseos en bote"],
          tags: ["playa", "aventura"]
        },
        {
          name: "Reserva Charco Verde (Ometepe)",
          type: "Naturaleza",
          description: "Reserva natural en la isla de Ometepe, conocida por su laguna interior, monos congo, aves silvestres y petroglifos en la orilla del lago. Un lugar de silencio y biodiversidad.",
          activities: ["Senderismo", "Observación de aves", "Kayak", "Fotografía"],
          tags: ["naturaleza"]
        },
        {
          name: "Playas de Tola y Playa Maderas",
          type: "Playa",
          description: "Al norte de San Juan del Sur, una cadena de playas solitarias con olas perfectas para surf. Playa Maderas es conocida en el circuito internacional del surf.",
          activities: ["Surf", "Natación", "Relajación"],
          tags: ["playa", "aventura"]
        }
      ],
      gastronomy: [
        {
          name: "Indio Viejo",
          description: "Guiso a base de masa de maíz y carne de res desmenuzada, con tomate, cebolla, chiltoma y especias. Un plato con raíces precolombinas que se ha mantenido en la gastronomía nicaragüense.",
          ingredients: ["Masa de maíz", "Carne de res", "Tomate", "Cebolla", "Chiltoma", "Achiote"],
          where: "Comedores y restaurantes de Rivas y Altagracia (Ometepe)"
        },
        {
          name: "Mariscos del Pacífico",
          description: "San Juan del Sur ofrece pescado fresco, camarones y mariscos del océano Pacífico, preparados de múltiples formas.",
          ingredients: ["Pescado", "Camarones", "Limón", "Ajo", "Cebolla"],
          where: "Restaurantes y comedores de San Juan del Sur"
        }
      ],
      activities: ["Senderismo a volcanes en Ometepe", "Surf en San Juan del Sur", "Observación de tortugas en Playa La Flor", "Kayak en el lago", "Visita a petroglifos"],
      culture: "La Isla de Ometepe tiene una de las concentraciones de petroglifos precolombinos más importantes de Nicaragua, evidencia de las culturas que habitaron la isla antes de la colonización española.",
      experiences: [
        "Subir el Volcán Concepción al amanecer",
        "Ver tortugas desovando en Playa La Flor (temporada de mayo a enero)",
        "Nadar en el Lago Cocibolca desde la isla",
        "Ver el atardecer desde el Cristo de San Juan del Sur",
        "Conocer el Ojo de Agua en Ometepe"
      ],
      tags: ["naturaleza", "aventura", "playa", "historia"]
    },

    {
      id: "leon",
      name: "León",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "La ciudad que leyó a Darío y descendió en tabla por un volcán negro.",
      description: "León tiene una personalidad doble: es la ciudad más intelectual de Nicaragua —cuna de Rubén Darío, de universidades, de muralismo y de ideas— y al mismo tiempo es el lugar donde se baja un volcán negro en tabla de madera. León Viejo es Patrimonio de la Humanidad. El Cerro Negro es el volcán más joven de América. Entre esos dos extremos, León tiene todo lo que le hace falta a una ciudad para ser memorable.",
      climate: "Cálido seco, entre 30°C y 40°C",
      tourismTypes: ["Cultural", "Aventura", "Histórico"],
      landscape: "Planicie volcánica, costa del Pacífico, ciudad colonial",
      highlights: ["León Viejo (UNESCO)", "Cerro Negro", "Centro histórico", "Playas de Poneloya y Las Peñitas"],
      color: "#E63946",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdO6KlvvMo0jT8uC6oRYtyHjwz7RzT2CHz6pY0Xlcvg&s=10",
      attractions: [
        {
          name: "Ruinas de León Viejo (UNESCO)",
          type: "Historia",
          description: "Las ruinas de la primera ciudad de León, fundada en 1524 y destruida por la erupción del Volcán Momotombo en 1610. Declaradas Patrimonio de la Humanidad por UNESCO en 2000. Aquí están los restos del conquistador Francisco Hernández de Córdoba.",
          activities: ["Historia", "Arqueología", "Fotografía"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Cerro Negro",
          type: "Aventura",
          description: "El volcán más joven de América Central, formado en 1850. Activo, negro como su nombre, con laderas de arena volcánica donde se practica el volcano boarding: descender en tabla desde la cima.",
          activities: ["Volcano boarding", "Senderismo", "Fotografía"],
          tags: ["aventura", "volcanes"]
        },
        {
          name: "Centro Histórico de León",
          type: "Cultural",
          description: "La Catedral de León es la más grande de Centroamérica. En su techo se puede caminar para ver la ciudad desde arriba. La Galería de los Héroes y Mártires, la Universidad Nacional Autónoma de Nicaragua (UNAN-León) y los murales del centro forman un recorrido cultural denso y emotivo.",
          activities: ["Historia", "Arte", "Fotografía", "Arquitectura"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Playas de Poneloya y Las Peñitas",
          type: "Playa",
          description: "Playas del Pacífico a 20 kilómetros del centro de León. Arena oscura, olas fuertes y un ambiente tranquilo de pueblo costero. Las Peñitas conecta con la Reserva Natural Juan Venado.",
          activities: ["Surf", "Natación", "Observación de tortugas", "Kayak por manglares"],
          tags: ["playa", "naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Quesillo",
          description: "Una tortilla de maíz con queso suave, crema, cebolla curtida en vinagre y sal. Enrollada en una bolsa plástica y comida con las manos. Simple, irresistible. El quesillo de León es uno de los más reconocidos del país.",
          ingredients: ["Tortilla de maíz", "Queso suave", "Crema", "Cebolla", "Vinagre", "Sal"],
          where: "Nagarote (a 40 km de León), comedores del centro de León, vendedores callejeros"
        },
        {
          name: "Sopa de mondongo",
          description: "Sopa espesa de vísceras de res con verduras, chile y especias. Un plato contundente que se come principalmente en almuerzos de fin de semana.",
          ingredients: ["Mondongo (intestinos de res)", "Papas", "Yuca", "Chiltoma", "Tomate", "Ajo"],
          where: "Comedores populares del centro de León"
        }
      ],
      activities: ["Volcano boarding en Cerro Negro", "Visita a León Viejo", "Recorrido por murales", "Surf en Poneloya", "Tours de muralismo político"],
      culture: "León fue la capital política e intelectual de Nicaragua. Cuna de Rubén Darío, el mayor poeta modernista en lengua española. El centro histórico está marcado por los murales que cuentan la historia política del siglo XX. La Catedral de León fue declarada Patrimonio de la Humanidad por UNESCO en 2011.",
      experiences: [
        "Bajar el Cerro Negro en tabla (volcano boarding)",
        "Subir al techo de la Catedral y ver la ciudad",
        "Visitar las ruinas de León Viejo",
        "Comer un quesillo en Nagarote",
        "Ver los murales del barrio Sutiaba"
      ],
      tags: ["historia", "aventura", "cultura", "playa"]
    },

    {
      id: "chinandega",
      name: "Chinandega",
      region: "pacifico",
      regionName: "Pacífico",
      tagline: "El calor más intenso y la tierra más fértil del Pacífico.",
      description: "Chinandega es el departamento más caluroso de Nicaragua. También es uno de los más productivos: caña de azúcar, plátano, maní, ajonjolí. La tierra aquí es oscura y fértil. Y entre volcanes como el San Cristóbal —el más alto del país— y las playas del Cosigüina, Chinandega guarda una geografía que pocos viajeros todavía descubren.",
      climate: "Cálido seco, entre 32°C y 42°C",
      tourismTypes: ["Naturaleza", "Aventura", "Ecoturismo"],
      landscape: "Volcanes, playas del Pacífico, esteros y manglares",
      highlights: ["Volcán Cosigüina", "Golfo de Fonseca", "Playa Aposentillo", "Volcán San Cristóbal"],
      color: "#D62828",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjoiRc4nM3MypFpMoNJXIvj9nPY9o7EjntFMm0ayOfg&s=10",
      attractions: [
        {
          name: "Volcán Cosigüina",
          type: "Naturaleza",
          description: "En la punta noroccidental de Nicaragua, el Volcán Cosigüina tiene una caldera convertida en laguna. Desde la cima, en días claros, se puede ver Honduras, El Salvador y las islas del Golfo de Fonseca.",
          activities: ["Senderismo", "Fotografía", "Observación de fauna"],
          tags: ["naturaleza", "aventura", "volcanes"]
        },
        {
          name: "Playas de Aposentillo y Jiquilillo",
          type: "Playa",
          description: "Playas del Pacífico Norte, con ambiente de turismo local y comunitario. Jiquilillo es conocida por la Reserva Natural Padre Ramos, un manglar que se puede recorrer en kayak.",
          activities: ["Surf", "Kayak por manglares", "Pesca", "Descanso"],
          tags: ["playa", "naturaleza"]
        },
        {
          name: "Volcán San Cristóbal",
          type: "Naturaleza",
          description: "El volcán más alto de Nicaragua con 1,745 metros sobre el nivel del mar. Activo. Su ascenso es uno de los retos de senderismo más exigentes del país.",
          activities: ["Senderismo", "Fotografía"],
          tags: ["aventura", "volcanes"]
        },
        {
          name: "Golfo de Fonseca",
          type: "Naturaleza",
          description: "Un golfo compartido entre Nicaragua, Honduras y El Salvador. Desde Chinandega se pueden tomar lanchas para visitar las islas y observar las aves migratorias.",
          activities: ["Paseos en lancha", "Pesca", "Observación de aves"],
          tags: ["naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Mariscos del Golfo de Fonseca",
          description: "Camarones, ostras, cangrejos y pescado fresco del Golfo de Fonseca. La pesca artesanal es parte de la vida cotidiana de las comunidades costeras.",
          ingredients: ["Camarones", "Ostras", "Cangrejo", "Pescado", "Limón"],
          where: "Comedores costeros en Corinto y playas de Chinandega"
        },
        {
          name: "Sopa de res con guineo",
          description: "Sopa contundente con carne de res, guineo verde, yuca y verduras. Plato de almuerzo típico en los comedores del interior de Chinandega.",
          ingredients: ["Carne de res", "Guineo verde", "Yuca", "Chayote", "Especias"],
          where: "Comedores populares de la ciudad de Chinandega"
        }
      ],
      activities: ["Senderismo al Volcán Cosigüina", "Kayak en manglares", "Surf en Aposentillo", "Pesca deportiva", "Tours por el Golfo de Fonseca"],
      culture: "Chinandega es tierra de ingenios azucareros. Su economía ha girado durante siglos alrededor de la producción agrícola, y esa identidad productiva define el carácter de su gente: trabajadora, directa, orgullosa de su tierra.",
      experiences: [
        "Ver los tres países desde el cráter del Volcán Cosigüina",
        "Kayak entre manglares en Reserva Padre Ramos",
        "Ver el atardecer desde Playa Aposentillo",
        "Comer mariscos frescos en Corinto",
        "Subir el San Cristóbal (para quienes buscan un reto físico real)"
      ],
      tags: ["naturaleza", "aventura", "playa", "volcanes"]
    },

    {
      id: "esteli",
      name: "Estelí",
      region: "centro",
      regionName: "Central",
      tagline: "El Diamante de las Segovias. Donde los puros llevan el nombre de Nicaragua al mundo.",
      description: "Estelí es fresca, directa y tiene un carácter propio. En los valles fértiles que rodean la ciudad se producen los puros nicaragüenses que fuman en los mejores salones del mundo. El tabaco es cultura aquí: una tradición que involucra semilleros, cuartos de añejamiento y torcedores de oficio. Y en las reservas que rodean la ciudad, la naturaleza es de la que deja sin palabras.",
      climate: "Templado, entre 18°C y 26°C",
      tourismTypes: ["Ecoturismo", "Cultural", "Aventura", "Agroturismo"],
      landscape: "Mesetas, valles, reservas naturales con cascadas",
      highlights: ["Reserva Natural Tisey-Estanzuela", "Reserva Natural Miraflor", "Salto La Estanzuela", "Industria del puro"],
      color: "#606C38",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbg4O53bo4rcNGxnB8sctfVo4WDwuwx9BTOcAVJ0ynRA&s=10",
      attractions: [
        {
          name: "Reserva Natural Tisey - La Estanzuela",
          type: "Naturaleza",
          description: "La cascada La Estanzuela cae 40 metros entre vegetación exuberante. La reserva también alberga el sendero El Jalacate, un museo natural con esculturas talladas en piedra por el artista local Alberto Gutiérrez en la roca viva.",
          activities: ["Senderismo", "Cascadas", "Arte en piedra", "Fotografía"],
          tags: ["naturaleza", "aventura", "cultura"]
        },
        {
          name: "Reserva Natural Miraflor",
          type: "Naturaleza",
          description: "Una reserva de bosque de neblina y bosques de pino con fincas de café sostenible. Reconocida por su biodiversidad de orquídeas y aves. El turismo comunitario es el modelo aquí.",
          activities: ["Senderismo", "Observación de aves y orquídeas", "Agroturismo", "Hospedaje comunitario"],
          tags: ["naturaleza", "turismo-rural"]
        },
        {
          name: "Industria del Puro",
          type: "Cultural",
          description: "Estelí es la capital del tabaco de Nicaragua. Se pueden visitar fábricas donde torcedores expertos elaboran puros a mano, siguiendo un proceso que lleva años de aprendizaje.",
          activities: ["Tours de fábrica", "Degustación", "Historia del tabaco"],
          tags: ["cultura"]
        },
        {
          name: "Cerro Tomabú",
          type: "Aventura",
          description: "Cerro que ofrece senderismo y exploración de cuevas naturales en sus laderas. Forma parte de la reserva natural del mismo nombre.",
          activities: ["Senderismo", "Exploración de cuevas", "Fotografía"],
          tags: ["aventura", "naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Güirilas con cuajada",
          description: "Tortillas de maíz tierno con cuajada fresca. En la región norte, la cuajada tiene un sabor más ácido y una textura más seca que en el Pacífico.",
          ingredients: ["Maíz tierno", "Cuajada fresca"],
          where: "Comedores y mercados de Estelí"
        },
        {
          name: "Pinolillo",
          description: "Bebida tradicional nicaragüense a base de maíz tostado y molido con cacao. Espesa, nutritiva y con un sabor que recuerda a la tierra. El pinolillo es el símbolo de la identidad nicaragüense.",
          ingredients: ["Maíz tostado", "Cacao", "Canela", "Azúcar", "Leche o agua"],
          where: "En toda Nicaragua, pero especialmente en hogares del norte"
        }
      ],
      activities: ["Senderismo en reservas naturales", "Tours de tabaco y puros", "Observación de aves y orquídeas", "Turismo comunitario en Miraflor", "Cascadas"],
      culture: "Estelí fue escenario de combates importantes durante el período revolucionario de finales de los años 70. Esa historia está presente en los murales del centro de la ciudad. La fábrica de puros Perdomo, DREW Estate y otras marcas internacionales tienen sus operaciones aquí, convirtiendo al tabaco en el puente entre la tradición local y el mundo.",
      experiences: [
        "Ver cómo se tuerce un puro a mano en una fábrica",
        "Caminar hasta la cascada La Estanzuela",
        "Despertar entre la niebla en la Reserva Miraflor",
        "Buscar orquídeas silvestres",
        "Tomar café de producción local en una finca"
      ],
      tags: ["naturaleza", "cultura", "aventura", "turismo-rural"]
    },

    {
      id: "madriz",
      name: "Madriz",
      region: "centro",
      regionName: "Central",
      tagline: "El departamento menos conocido y uno de los más auténticos.",
      description: "Madriz es tranquilo. No tiene volcanes famosos ni playas de postal, pero tiene algo que los departamentos más turísticos ya están perdiendo: autenticidad. Sus pueblos son pequeños, sus montañas son verdes, su café es de los mejores de Nicaragua y la gente no espera visitantes con guiones preparados. Aquí uno llega y la vida sigue como siempre ha sido.",
      climate: "Templado de montaña, entre 18°C y 24°C",
      tourismTypes: ["Ecoturismo", "Agroturismo", "Turismo rural"],
      landscape: "Montañas, valles, bosques de pino",
      highlights: ["San Lucas", "Somoto", "Cañón de Somoto", "Café de altura"],
      color: "#588157",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxYc_lZF9I4D9uO7lqj9u224Gz67uxUj3kK1-vzvGYw&s",
      attractions: [
        {
          name: "Cañón de Somoto",
          type: "Aventura",
          description: "Un cañón formado por el Río Coco entre paredes de roca de hasta 160 metros de altura y 5 kilómetros de longitud. Se recorre a pie, nadando y saltando entre las piedras. Una de las experiencias de aventura más singulares de Nicaragua.",
          activities: ["Senderismo acuático", "Natación", "Rapel", "Fotografía"],
          tags: ["aventura", "naturaleza"]
        },
        {
          name: "San Lucas",
          type: "Cultural",
          description: "Municipio con una de las tradiciones artesanales más arraigadas de Madriz. Sus ceramistas trabajan con técnicas heredadas de generaciones anteriores.",
          activities: ["Turismo cultural", "Artesanía", "Fotografía"],
          tags: ["cultura", "turismo-rural"]
        },
        {
          name: "Fincas cafetaleras de Telpaneca",
          type: "Naturaleza",
          description: "Las fincas de café de altura de Madriz producen granos de especialidad. Las visitas permiten conocer el proceso completo de la producción cafetalera.",
          activities: ["Agroturismo", "Observación de biodiversidad", "Degustación de café"],
          tags: ["turismo-rural", "naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Café de altura",
          description: "Madriz produce café de especialidad que se exporta a mercados internacionales. En las fincas locales se puede degustar el café recién procesado con perfiles de sabor únicos.",
          ingredients: ["Café arábica de altura"],
          where: "Fincas cafetaleras y comedores locales de Somoto y Telpaneca"
        },
        {
          name: "Cuajada fresca con tortilla",
          description: "La cuajada de Madriz, elaborada artesanalmente con leche de vaca de las zonas ganaderas del departamento, acompañada de tortilla recién hecha en comal.",
          ingredients: ["Leche de vaca", "Sal", "Tortilla de maíz"],
          where: "Mercados y comedores locales"
        }
      ],
      activities: ["Cañón de Somoto (senderismo acuático)", "Turismo cafetalero", "Artesanía en San Lucas", "Senderismo de montaña", "Turismo comunitario"],
      culture: "Madriz preserva tradiciones artesanales y comunitarias que en otras zonas han desaparecido. El ritmo pausado de sus pueblos es en sí mismo una propuesta cultural para el viajero acostumbrado a las prisas.",
      experiences: [
        "Recorrer el Cañón de Somoto nadando",
        "Pasar una noche en una finca cafetalera",
        "Conocer artesanos de San Lucas",
        "Despertar con el sonido de las aves en la montaña",
        "Tomar café directamente de la finca"
      ],
      tags: ["aventura", "naturaleza", "turismo-rural"]
    },

    {
      id: "nueva-segovia",
      name: "Nueva Segovia",
      region: "centro",
      regionName: "Central",
      tagline: "En la frontera norte, donde el bosque de pino no termina nunca.",
      description: "Nueva Segovia es el extremo norte de Nicaragua. Frontera con Honduras, montañas de pino que se extienden hasta donde alcanza la vista y un río —el Río Coco o Wangki— que es el más largo de Centroamérica. Ocotal es tranquila, organizada y tiene un parque central con una arquitectura que sorprende en un departamento tan apartado. El café de Nueva Segovia viaja al otro lado del mundo.",
      climate: "Templado de montaña, entre 15°C y 24°C",
      tourismTypes: ["Ecoturismo", "Agroturismo", "Aventura"],
      landscape: "Bosques de pino, montañas, Río Coco",
      highlights: ["Ocotal", "Río Coco", "Bosques de pino", "Café de altura"],
      color: "#344E41",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPPfArQzxgC4T7ksRsyaJvLkTWUtBFQ2bSUYZo3es5oA&s=10",
      attractions: [
        {
          name: "Río Coco (Wangki)",
          type: "Naturaleza",
          description: "El río más largo de Centroamérica, que sirve de frontera natural entre Nicaragua y Honduras en su tramo norte. Sus orillas están habitadas por comunidades indígenas miskitas y mestizas.",
          activities: ["Kayak y piragüismo", "Pesca", "Turismo comunitario"],
          tags: ["naturaleza", "aventura", "turismo-rural"]
        },
        {
          name: "Ciudad de Ocotal",
          type: "Cultural",
          description: "Capital departamental con arquitectura colonial y un ambiente de ciudad pequeña ordenada. El parque central es punto de reunión y referencia cultural de la ciudad.",
          activities: ["Turismo cultural", "Gastronomía", "Historia"],
          tags: ["cultura"]
        },
        {
          name: "Bosques de pino y producción cafetalera",
          type: "Naturaleza",
          description: "Los bosques de pino de Nueva Segovia son parte de la identidad del territorio. Junto a ellos, las fincas de café de altura producen granos que llegan a cafeterías especializadas en Europa, Asia y Norteamérica.",
          activities: ["Senderismo", "Agroturismo", "Fotografía"],
          tags: ["naturaleza", "turismo-rural"]
        }
      ],
      gastronomy: [
        {
          name: "Café de Nueva Segovia",
          description: "Considerado uno de los mejores cafés del mundo por su acidez brillante y notas afrutadas. Se cultiva en altitudes que superan los 1,200 metros sobre el nivel del mar.",
          ingredients: ["Café arábica de altura"],
          where: "Fincas cafetaleras del norte del departamento"
        },
        {
          name: "Nacatamal segoviano",
          description: "Versión del nacatamal con particularidades regionales: la masa es más gruesa y los rellenos varían según la familia y la temporada.",
          ingredients: ["Masa de maíz", "Cerdo", "Verduras", "Especias locales"],
          where: "Comedores y hogares de Ocotal los fines de semana"
        }
      ],
      activities: ["Kayak en el Río Coco", "Senderismo en bosques de pino", "Turismo cafetalero", "Visitas comunitarias"],
      culture: "El norte de Nicaragua tiene una historia de resistencia y autonomía. Las comunidades de las Segovias mantienen tradiciones propias que mezclan lo campesino, lo indígena y lo histórico de una región que siempre estuvo en los márgenes del poder central.",
      experiences: [
        "Kayak por el Río Coco hacia Honduras",
        "Visitar una finca cafetalera en plena cosecha",
        "Caminar por bosques de pino en silencio",
        "Conocer Ocotal y su parque central tranquilo",
        "Probar café de especialidad recién tostado"
      ],
      tags: ["naturaleza", "turismo-rural", "aventura"]
    },

    {
      id: "jinotega",
      name: "Jinotega",
      region: "centro",
      regionName: "Central",
      tagline: "La Ciudad de las Brumas. Donde el café vive en la niebla.",
      description: "Jinotega huele a tierra mojada y a café. La niebla baja por las montañas casi todas las mañanas y hace que el verde sea un verde diferente. El Lago de Apanás —el primer lago artificial de Nicaragua— refleja ese cielo de nubes y es un lugar donde la pesca, el kayak y la observación de aves coexisten sin competir. Si León es la ciudad más caliente de Nicaragua, Jinotega es una de las más frescas.",
      climate: "Templado frío, entre 14°C y 22°C",
      tourismTypes: ["Ecoturismo", "Agroturismo", "Naturaleza"],
      landscape: "Montañas, bosques nubosos, lago artificial, cafetales",
      highlights: ["Lago de Apanás", "Reserva Bosawás", "San Rafael del Norte", "Cafetales de altura"],
      color: "#1B4332",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hznDP9w49TRMOApdSO3ldCxk9g4UxKqUm98OK1ft5Q&s=10",
      attractions: [
        {
          name: "Lago de Apanás",
          type: "Naturaleza",
          description: "El primer lago artificial de Nicaragua, creado en los años 60 con la represa del Río Tuma. Sitio RAMSAR (humedal de importancia internacional). Ideal para kayak, pesca deportiva y observación de aves acuáticas.",
          activities: ["Kayak", "Pesca deportiva", "Observación de aves", "Paseos en lancha"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Reserva de Biosfera Bosawás",
          type: "Naturaleza",
          description: "Jinotega es la puerta de entrada a Bosawás, la segunda reserva de selva tropical más grande de América después del Amazonas. Un territorio de selva virgen, ríos, comunidades indígenas y biodiversidad extrema.",
          activities: ["Ecoturismo", "Turismo comunitario", "Senderismo avanzado", "Fotografía de naturaleza"],
          tags: ["naturaleza", "turismo-rural"]
        },
        {
          name: "San Rafael del Norte",
          type: "Cultural",
          description: "Pueblo de montaña con valor histórico y paisajes andinos. Conocido como el lugar donde el General Augusto César Sandino estableció su base durante la lucha de resistencia de los años 1920-1930.",
          activities: ["Historia", "Senderismo", "Fotografía"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Fincas cafetaleras de altura",
          type: "Naturaleza",
          description: "Jinotega es uno de los principales departamentos productores de café de Nicaragua. Las fincas de altura, generalmente entre 1,000 y 1,500 metros, ofrecen visitas guiadas durante la cosecha (noviembre-febrero).",
          activities: ["Agroturismo", "Senderismo", "Degustación", "Fotografía"],
          tags: ["turismo-rural", "naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Café de Jinotega",
          description: "Considerado por algunos catadores como uno de los mejores cafés del mundo. El microclima de altura, la sombra de los árboles y el procesamiento artesanal producen tazas con cuerpo, acidez equilibrada y notas a frutas y caramelo.",
          ingredients: ["Café arábica de altura"],
          where: "Fincas cafetaleras locales y cafeterías del centro de Jinotega"
        },
        {
          name: "Cuajada con tortilla y frijoles",
          description: "El desayuno de la montaña. Cuajada fresca, frijoles negros o rojos y tortilla recién hecha en comal de leña. Sin complicaciones y sin igual.",
          ingredients: ["Cuajada", "Frijoles", "Tortilla de maíz", "Mantequilla"],
          where: "Comedores locales y fincas"
        }
      ],
      activities: ["Kayak y pesca en Lago de Apanás", "Agroturismo en cafetales", "Senderismo de montaña", "Observación de aves", "Ecoturismo en Bosawás"],
      culture: "La niebla no es solo el clima de Jinotega; es parte de su identidad. Sus pobladores tienen esa calma de quien vive entre montañas y sabe que no tiene prisa. La producción de café es una forma de vida colectiva: familias, cooperativas, tradición.",
      experiences: [
        "Despertar con la niebla sobre el Lago de Apanás",
        "Recoger café en una finca durante la cosecha",
        "Kayak al amanecer antes de que se levante la niebla",
        "Escuchar el silencio de los bosques nubosos",
        "Tomar la primera taza de café del día recién tostado"
      ],
      tags: ["naturaleza", "turismo-rural", "aventura"]
    },

    {
      id: "matagalpa",
      name: "Matagalpa",
      region: "centro",
      regionName: "Central",
      tagline: "La Perla del Septentrión. Montañas, café y bosque eterno.",
      description: "Matagalpa es el departamento de café más reconocido de Nicaragua. Sus montañas verdes, cubiertas de bosque nuboso, ocultan la biodiversidad más rica del país y las historias de familias que llevan generaciones produciendo café que los baristas de Tokio, Amsterdam y Nueva York preparan con respeto. La Selva Negra es un bosque de película. Y el Río Grande de Matagalpa cruza un territorio que todavía tiene mucho que mostrar.",
      climate: "Templado, entre 18°C y 27°C",
      tourismTypes: ["Ecoturismo", "Agroturismo", "Aventura", "Cultural"],
      landscape: "Montañas, bosques nubosos, ríos, cafetales",
      highlights: ["Selva Negra", "Reserva Natural Cerro Apante", "Peñas Blancas", "Ciudad de Matagalpa"],
      color: "#386641",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Cu4cVWrGjUP84dHDNQ0T_Y1tZARaEMGgKrDvFPAt-Q&s=10",
      attractions: [
        {
          name: "Selva Negra (Finca Kilimanjaro)",
          type: "Naturaleza",
          description: "Una reserva privada de bosque nuboso con senderos bien marcados, una laguna, una hacienda colonial y una biodiversidad impresionante. Se dice que en esta finca se pueden encontrar más de 200 especies de aves.",
          activities: ["Senderismo", "Observación de aves", "Fotografía de naturaleza", "Hospedaje en hacienda"],
          tags: ["naturaleza", "turismo-rural"]
        },
        {
          name: "Reserva Natural Cerro Apante",
          type: "Naturaleza",
          description: "Reserva natural en las afueras de la ciudad de Matagalpa. Ofrece senderos con vistas panorámicas a la ciudad y hacia los valles cafetaleros.",
          activities: ["Senderismo", "Fotografía", "Observación de aves"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Macizo de Peñas Blancas",
          type: "Aventura",
          description: "Una de las caminatas más espectaculares de Nicaragua entre cascadas, neblina y selva densa. Requiere condición física y guía local. La recompensa es un paisaje de otro mundo.",
          activities: ["Senderismo avanzado", "Canyoning", "Fotografía"],
          tags: ["aventura", "naturaleza"]
        },
        {
          name: "Ciudad de Matagalpa",
          type: "Cultural",
          description: "La ciudad tiene una arquitectura que mezcla lo colonial con lo contemporáneo. Es conocida como cuna de héroes nacionales y tiene una tradición de resistencia cultural.",
          activities: ["Historia", "Gastronomía", "Cultura"],
          tags: ["historia", "cultura"]
        }
      ],
      gastronomy: [
        {
          name: "Café de Matagalpa",
          description: "El café de Matagalpa es reconocido mundialmente por su calidad. Las fincas de la región producen variedades como Bourbon, Caturra y Maracaturra con perfiles de sabor únicos.",
          ingredients: ["Café arábica de altura"],
          where: "Fincas cafetaleras, cafeterías del centro de Matagalpa"
        },
        {
          name: "Cuajada y crema con tortilla",
          description: "Desayuno tradicional del norte de Nicaragua. Cuajada fresca, crema espesa y tortilla de maíz recién hecha. Simple y completamente satisfactorio.",
          ingredients: ["Cuajada", "Crema", "Tortilla de maíz"],
          where: "Comedores locales de Matagalpa"
        }
      ],
      activities: ["Senderismo en Selva Negra", "Agroturismo cafetalero", "Observación de aves", "Canyoning en Peñas Blancas", "Turismo comunitario"],
      culture: "Matagalpa tiene una historia de comunidades cooperativistas. La producción de café no es un negocio anónimo aquí: es una historia familiar, generacional. Muchas fincas han pasado de abuelos a nietos y conservan prácticas de producción sostenible.",
      experiences: [
        "Caminar por la Selva Negra entre árboles centenarios",
        "Pasar la noche en una finca cafetalera",
        "Ver cómo procesa el café en su etapa de fermentación y secado",
        "Escuchar quetzales y tucanes en los bosques nubosos",
        "Llegar a Peñas Blancas y ver la cascada principal"
      ],
      tags: ["naturaleza", "turismo-rural", "aventura"]
    },

    {
      id: "boaco",
      name: "Boaco",
      region: "centro",
      regionName: "Central",
      tagline: "La Ciudad de Dos Pisos y la ganadería que alimenta al país.",
      description: "Boaco es poco conocida fuera de Nicaragua, pero quien llega se sorprende. La capital departamental está construida en dos niveles separados por una escalinata que une la parte alta con la baja. Es la única ciudad de Nicaragua con esa estructura particular. Y alrededor, el paisaje es de ganadería, montañas y una tranquilidad que parece fuera de moda.",
      climate: "Semiseco tropical, entre 22°C y 30°C",
      tourismTypes: ["Cultural", "Turismo rural", "Naturaleza"],
      landscape: "Colinas, montañas, pastizales",
      highlights: ["Ciudad de Boaco (dos pisos)", "Camoapa", "Santa Lucía", "Ganadería y quesería"],
      color: "#BC6C25",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZpVIIxTd0ZECDrchess4w9oKi5vqjmWRdesCe8pckqw&s=10",
      attractions: [
        {
          name: "Boaco Ciudad de Dos Pisos",
          type: "Cultural",
          description: "La única ciudad de Nicaragua construida en dos niveles. La escalinata que conecta ambas partes es el símbolo de la ciudad. Desde la parte alta, la vista del paisaje circundante es un cuadro inesperado.",
          activities: ["Turismo cultural", "Fotografía", "Historia local"],
          tags: ["cultura", "historia"]
        },
        {
          name: "Municipio de Santa Lucía",
          type: "Naturaleza",
          description: "Pequeño municipio en las montañas de Boaco, conocido por su arquitectura de pueblo pintoresco y sus paisajes montañosos.",
          activities: ["Senderismo", "Fotografía", "Turismo rural"],
          tags: ["naturaleza", "turismo-rural"]
        },
        {
          name: "Camoapa",
          type: "Cultural",
          description: "El segundo municipio más importante del departamento, con una tradición artesanal de cestería y fibras naturales que se trabajan en talleres familiares.",
          activities: ["Artesanía", "Cultura", "Turismo rural"],
          tags: ["cultura", "turismo-rural"]
        }
      ],
      gastronomy: [
        {
          name: "Queso y cuajada de Boaco",
          description: "La ganadería de Boaco produce leche de la que se elaboran quesos y cuajadas reconocidos en todo Nicaragua. El queso seco de Boaco es un producto de exportación regional.",
          ingredients: ["Leche de vaca", "Sal"],
          where: "Mercados locales y queserías artesanales de Boaco y Camoapa"
        },
        {
          name: "Sopa de res",
          description: "Sopa con carne de res local, verduras, guineo y yuca. Contundente, caliente y preparada con la carne del ganado que se cría en los llanos del departamento.",
          ingredients: ["Carne de res", "Yuca", "Guineo", "Chayote", "Hierbas locales"],
          where: "Comedores del mercado de Boaco"
        }
      ],
      activities: ["Turismo rural y ganadero", "Senderismo de montaña", "Artesanía en Camoapa", "Fotografía en Santa Lucía"],
      culture: "Boaco tiene una identidad ganadera que define su cultura, su comida y su forma de ver el mundo. Las ferias ganaderas son eventos de identidad comunitaria.",
      experiences: [
        "Subir la escalinata de la Ciudad de Dos Pisos",
        "Comprar queso fresco directamente de una quesería",
        "Ver el paisaje desde la parte alta de Boaco",
        "Visitar Santa Lucía y su iglesia de montaña",
        "Conocer un taller de artesanía en Camoapa"
      ],
      tags: ["cultura", "turismo-rural", "naturaleza"]
    },

    {
      id: "chontales",
      name: "Chontales",
      region: "centro",
      regionName: "Central",
      tagline: "Tierra de guerreros, queso y estatuas precolombinas.",
      description: "Chontales tiene un nombre que en náhuatl significa 'bárbaro' o 'extranjero' —así llamaban los aztecas a los pueblos que no entendían. Hoy el departamento es tierra de ganaderos, de queso artesanal que se vende en todo el país y de uno de los conjuntos de estatuaria precolombina más relevantes de Nicaragua. Juigalpa tiene un museo que guarda esas piedras que alguien talló hace más de mil años.",
      climate: "Tropical seco, entre 24°C y 32°C",
      tourismTypes: ["Cultural", "Histórico", "Turismo rural"],
      landscape: "Llanos, colinas, orillas del Lago Cocibolca",
      highlights: ["Juigalpa", "Museo Gregorio Aguilar Barea", "Embalse de Miraflores", "Cuapa"],
      color: "#9C6644",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qfwsxE8k4Fe3pLlT8xr3B3jpoSGzXu_VYzMtw-2FxQ&s=10",
      attractions: [
        {
          name: "Museo Arqueológico Gregorio Aguilar Barea (Juigalpa)",
          type: "Historia",
          description: "Uno de los museos arqueológicos más importantes de Nicaragua. Alberga una colección de estatuas precolombinas de la cultura chontaleña, talladas en piedra entre el siglo VIII y XIII de nuestra era. Las figuras tienen una expresividad única en toda la región.",
          activities: ["Historia", "Arqueología", "Cultura"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Cuapa",
          type: "Cultural",
          description: "Pequeño municipio conocido por su significado religioso dentro de la fe católica nicaragüense. También tiene paisajes montañosos y una cascada.",
          activities: ["Peregrinación", "Senderismo", "Fotografía"],
          tags: ["cultura", "naturaleza"]
        },
        {
          name: "Embalse de Miraflores",
          type: "Naturaleza",
          description: "Cuerpo de agua artificial que ofrece actividades de pesca y descanso en un entorno tranquilo.",
          activities: ["Pesca", "Descanso", "Fotografía"],
          tags: ["naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Queso seco de Chontales",
          description: "El queso seco de Chontales es uno de los más reconocidos de Nicaragua. Firme, salado, de sabor intenso. Se produce en queserías artesanales que llevan décadas en operación.",
          ingredients: ["Leche de vaca", "Sal", "Cuajo"],
          where: "Queserías de Juigalpa y La Libertad"
        },
        {
          name: "Carne asada a la leña",
          description: "La ganadería de Chontales produce carne de buena calidad que se cocina a las brasas. Los comedores locales la sirven con gallo pinto, plátano maduro y ensalada.",
          ingredients: ["Carne de res", "Sal", "Limón"],
          where: "Restaurantes y comedores de Juigalpa"
        }
      ],
      activities: ["Visita al museo arqueológico", "Turismo ganadero", "Senderismo en Cuapa", "Compra de queso artesanal"],
      culture: "Chontales conserva la memoria de las culturas precolombinas que habitaron este territorio a través de su museo y de la tradición oral de sus comunidades. La ganadería es el eje económico y también el eje cultural.",
      experiences: [
        "Ver las estatuas precolombinas en el museo de Juigalpa",
        "Comprar queso seco directo de la quesería",
        "Conocer Cuapa y su paisaje montañoso",
        "Comer carne asada a las brasas en un comedor local",
        "Visitar las orillas del Lago Cocibolca desde el departamento"
      ],
      tags: ["historia", "cultura", "turismo-rural"]
    },

    {
      id: "rio-san-juan",
      name: "Río San Juan",
      region: "centro",
      regionName: "Central",
      tagline: "Donde el Gran Lago se convierte en río y llega al Caribe.",
      description: "Río San Juan es uno de los secretos mejor guardados de Nicaragua. Un departamento al que solo se puede llegar en bus o en lancha, sin autopistas modernas que te acerquen demasiado rápido. El río que le da nombre nació del Lago Cocibolca y camina 180 kilómetros hasta el Mar Caribe. En ese recorrido está todo: historia colonial, selva virgen, caimanes, monos, una fortaleza del siglo XVII y las islas de Solentiname donde nació un movimiento artístico que viajó al mundo.",
      climate: "Tropical húmedo, lluvioso, entre 26°C y 33°C",
      tourismTypes: ["Naturaleza", "Aventura", "Histórico", "Ecoturismo"],
      landscape: "Selva tropical, ríos, humedales, isla, Lago Cocibolca",
      highlights: ["Reserva Biológica Indio Maíz", "Archipiélago de Solentiname", "El Castillo y Fortaleza Colonial", "Refugio de Vida Silvestre Los Guatuzos"],
      color: "#0A7E3F",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dFK7Mjp6RlEzb7V6p1qqXV74TtKMNq1ep_OTL-3L0w&s=10",
      attractions: [
        {
          name: "Reserva Biológica Indio Maíz",
          type: "Naturaleza",
          description: "Una de las reservas de selva tropical más importantes de Nicaragua y de Centroamérica. Territorio de jaguares, dantas, monos congo, guacamayas y una biodiversidad difícil de dimensionar. El acceso es por río. La selva es virgen y la experiencia es de las pocas que quedan auténticamente salvajes.",
          activities: ["Ecoturismo", "Observación de fauna", "Fotografía", "Senderismo con guía"],
          tags: ["naturaleza", "aventura"]
        },
        {
          name: "Archipiélago de Solentiname",
          type: "Cultural",
          description: "Islas en el Lago Cocibolca donde el poeta-sacerdote Ernesto Cardenal fundó una comunidad artística que transformó el arte primitivo nicaragüense. Las pinturas de Solentiname llegaron a museos de todo el mundo. Hoy es Reserva Natural y los artesanos locales mantienen esa tradición.",
          activities: ["Arte y cultura", "Turismo comunitario", "Observación de fauna", "Pesca"],
          tags: ["cultura", "naturaleza", "historia"]
        },
        {
          name: "Fortaleza de la Inmaculada Concepción (El Castillo)",
          type: "Historia",
          description: "Una fortaleza construida por los españoles en el siglo XVII para defender el acceso al interior de Nicaragua desde el Mar Caribe. El pequeño pueblo de El Castillo se construyó alrededor de la fortaleza y conserva ese ambiente de historia fluvial.",
          activities: ["Historia", "Fotografía", "Paseos en lancha"],
          tags: ["historia", "cultura"]
        },
        {
          name: "Refugio de Vida Silvestre Los Guatuzos",
          type: "Naturaleza",
          description: "Un humedal entre el Lago Cocibolca y el Río Frío. Rico en aves acuáticas, caimanes, monos y vegetación de galería. Se recorre en bote por senderos acuáticos.",
          activities: ["Recorridos en bote", "Observación de fauna", "Fotografía"],
          tags: ["naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Gaspar y guapote",
          description: "Peces de río y lago que se preparan fritos o en sopa. El gaspar y el guapote son peces nativos del Lago Cocibolca y el Río San Juan, base de la dieta local.",
          ingredients: ["Gaspar o guapote", "Ajo", "Limón", "Sal", "Aceite"],
          where: "Comedores de San Carlos, El Castillo y pueblos ribereños"
        },
        {
          name: "Sopa de tortuga (cuando está permitido y fuera de temporada de veda)",
          description: "Plato tradicional de las comunidades ribereñas, aunque actualmente existe regulación sobre el aprovechamiento de fauna silvestre. Consultar disponibilidad y legalidad local antes de solicitar.",
          ingredients: ["Tortuga", "Verduras", "Especias locales"],
          where: "Comunidades ribereñas del Río San Juan (con regulación vigente)"
        }
      ],
      activities: ["Ecoturismo en Indio Maíz", "Visita a Solentiname", "Tour por El Castillo", "Avistamiento nocturno de caimanes", "Recorridos en bote por Los Guatuzos"],
      culture: "Río San Juan conecta dos mundos: el Gran Lago y el Mar Caribe. Esa posición geográfica le dio importancia estratégica durante la colonia y el siglo XIX. La fortaleza de El Castillo es un símbolo de esa historia. Y el movimiento artístico de Solentiname es una de las expresiones culturales más singulares de Nicaragua en el siglo XX.",
      experiences: [
        "Recorrer la selva Indio Maíz en lancha y a pie",
        "Comprar una pintura de Solentiname directamente al artista",
        "Ver caimanes en su ambiente natural de noche",
        "Caminar por la Fortaleza de El Castillo y ver el río desde arriba",
        "Escuchar la selva en silencio absoluto"
      ],
      tags: ["naturaleza", "historia", "cultura", "aventura"]
    },

    {
      id: "costa-caribe-norte",
      name: "Costa Caribe Norte",
      region: "caribe",
      regionName: "Caribe",
      tagline: "Otro ritmo, otro idioma, otro mar.",
      description: "La Costa Caribe Norte es Nicaragua desde otro ángulo. Aquí el español no es el único idioma; el miskito, el mayangna y el inglés creole suenan con naturalidad. Las comunidades indígenas miskitas son las más numerosas de Nicaragua y mantienen una identidad propia, una relación ancestral con el mar y los ríos, y una forma de organizar la vida que no se parece a ningún otro rincón del país. Bilwi (Puerto Cabezas) es la puerta de entrada y el centro de todo.",
      climate: "Tropical húmedo, lluvioso, entre 26°C y 32°C",
      tourismTypes: ["Naturaleza", "Cultural indígena", "Ecoturismo", "Playa"],
      landscape: "Selva tropical, playas caribeñas, ríos, lagunas",
      highlights: ["Bilwi (Puerto Cabezas)", "Reserva de Biosfera Bosawás", "Waspam y el Río Coco", "Comunidades indígenas miskitas"],
      color: "#0077B6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT90-nY7y_e3zZBJLomTDqCxo4v4J3_OCBh-IL5YH9nA&s=10",
      isAutonomousRegion: true,
      autonomousNote: "La Costa Caribe Norte es una Región Autónoma (RACCN), no un departamento. Tiene sus propias autoridades regionales y autonomía reconocida por la Constitución de Nicaragua desde 1987.",
      attractions: [
        {
          name: "Bilwi (Puerto Cabezas)",
          type: "Cultural",
          description: "La ciudad más importante de la Costa Caribe Norte y capital de la RACCN. Un puerto vivo con identidad caribeña, lenguas indígenas, mercado de mariscos y una relación directa con el Mar Caribe.",
          activities: ["Turismo cultural", "Gastronomía", "Compras", "Fotografía"],
          tags: ["cultura"]
        },
        {
          name: "Comunidades miskitas del Río Coco",
          type: "Cultural",
          description: "Las comunidades miskitas a lo largo del Río Coco (Wangki) son uno de los destinos de turismo comunitario más auténticos de Nicaragua. Organizaciones locales guían a visitantes con respeto y sin folklorizar la vida cotidiana.",
          activities: ["Turismo comunitario", "Cultura indígena", "Fotografía"],
          tags: ["cultura", "turismo-rural"]
        },
        {
          name: "Reserva de Biosfera Bosawás",
          type: "Naturaleza",
          description: "La segunda reserva de selva tropical más grande de América después del Amazonas. Un territorio inmenso de biodiversidad, ríos y comunidades indígenas mayangnas y miskitas.",
          activities: ["Ecoturismo", "Senderismo avanzado", "Fotografía de naturaleza"],
          tags: ["naturaleza"]
        }
      ],
      gastronomy: [
        {
          name: "Rondón caribeño",
          description: "El plato emblemático del Caribe nicaragüense. Pescado, mariscos, yuca, quequisque y verduras cocinados en leche de coco. El color, el sabor y el aroma son completamente diferentes a la cocina del Pacífico.",
          ingredients: ["Pescado", "Mariscos", "Yuca", "Quequisque", "Leche de coco", "Chile"],
          where: "Restaurantes y comedores de Bilwi y comunidades costeras"
        },
        {
          name: "Arroz con coco",
          description: "Arroz cocinado en leche de coco, ligeramente dulce. Plato de acompañamiento fundamental en la gastronomía del Caribe nicaragüense.",
          ingredients: ["Arroz", "Leche de coco", "Sal"],
          where: "En toda la Costa Caribe Norte"
        }
      ],
      activities: ["Turismo comunitario miskito", "Ecoturismo en Bosawás", "Pesca artesanal", "Recorrido por el Río Coco"],
      culture: "La Costa Caribe Norte tiene una historia de autonomía y resistencia. Las comunidades miskitas mantienen formas de gobierno comunitario propias. El idioma miskito tiene su propia literatura, sus propias canciones y sus propias historias que el turismo raramente alcanza.",
      experiences: [
        "Visitar una comunidad miskita con guía comunitario local",
        "Comer rondón en Puerto Cabezas",
        "Ver el Mar Caribe desde la costa de Bilwi",
        "Escuchar música y lenguas indígenas en el mercado local",
        "Recorrer el Río Coco en panga"
      ],
      tags: ["cultura", "naturaleza", "turismo-rural"]
    },

    {
      id: "costa-caribe-sur",
      name: "Costa Caribe Sur",
      region: "caribe",
      regionName: "Caribe",
      tagline: "Bluefields, la langosta y el reggae que se mezcla con el palo de mayo.",
      description: "La Costa Caribe Sur tiene el ritmo del Caribe: el mar, el viento, los colores, el reggae que sale de las casas de madera pintadas de amarillo. Bluefields es la ciudad más grande del Caribe nicaragüense y tiene ese ambiente de puerto caribeño que no se parece a ninguna ciudad del Pacífico. La Laguna de Bluefields, el Maíz Corn Island y el Festival del Palo de Mayo son experiencias que muestran una Nicaragua que muchos turistas no saben que existe.",
      climate: "Tropical muy húmedo, entre 26°C y 32°C",
      tourismTypes: ["Playa", "Cultural", "Naturaleza", "Ecoturismo"],
      landscape: "Costa caribeña, lagunas, selva tropical, islas",
      highlights: ["Bluefields", "Corn Island", "Little Corn Island", "Río Escondido"],
      color: "#00B4D8",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZJ43I34PZyyVlijNlwEFEfKZCNYOKeOoVkcaiKc5Zg&s=10",
      isAutonomousRegion: true,
      autonomousNote: "La Costa Caribe Sur es una Región Autónoma (RACCS), no un departamento. Tiene sus propias autoridades regionales y autonomía reconocida por la Constitución de Nicaragua desde 1987.",
      attractions: [
        {
          name: "Corn Island (Isla del Maíz Grande)",
          type: "Playa",
          description: "Una isla caribeña con playas de arena blanca, agua turquesa y arrecifes de coral para buceo. El ambiente es completamente caribeño: reggae, pesca, hamacas y langosta.",
          activities: ["Buceo", "Snorkel", "Natación", "Pesca", "Relajación"],
          tags: ["playa", "aventura", "naturaleza"]
        },
        {
          name: "Little Corn Island",
          type: "Playa",
          description: "Una isla pequeña sin carros, con playas vírgenes y arrecifes de coral entre los mejor preservados de Nicaragua. Acceso solo en panga desde Corn Island.",
          activities: ["Buceo", "Snorkel", "Senderismo en la isla", "Descanso total"],
          tags: ["playa", "naturaleza"]
        },
        {
          name: "Bluefields",
          type: "Cultural",
          description: "Ciudad caribeña con identidad creole, afrodescendiente e indígena. El Festival del Palo de Mayo (mayo) es una explosión de música, danza y color. La laguna de Bluefields es una de las lagunas costeras más grandes de Centroamérica.",
          activities: ["Turismo cultural", "Festival del Palo de Mayo", "Gastronomía", "Paseos en lancha"],
          tags: ["cultura"]
        },
        {
          name: "Reserva Biológica Indio Maíz (acceso sur)",
          type: "Naturaleza",
          description: "La reserva más grande de Nicaragua también tiene acceso desde la Costa Caribe Sur. Por el Río Indio se pueden hacer recorridos de ecoturismo hacia el interior de la selva.",
          activities: ["Ecoturismo", "Observación de fauna", "Senderismo"],
          tags: ["naturaleza", "aventura"]
        }
      ],
      gastronomy: [
        {
          name: "Langosta y mariscos de Corn Island",
          description: "La langosta del Caribe nicaragüense es uno de los productos gastronómicos más apreciados. En Corn Island se sirve recién sacada del mar, preparada simplemente a la plancha con mantequilla y limón.",
          ingredients: ["Langosta", "Mantequilla", "Limón", "Ajo"],
          where: "Restaurantes y comedores de Corn Island"
        },
        {
          name: "Rondón",
          description: "El plato más emblemático del Caribe. Diferentes tipos de mariscos y pescado cocinados en leche de coco con tubérculos y verduras. Cada cocinera tiene su versión.",
          ingredients: ["Mariscos variados", "Leche de coco", "Yuca", "Quequisque", "Chile"],
          where: "Comedores de Bluefields, Corn Island y comunidades costeras"
        },
        {
          name: "Pan de coco",
          description: "Pan dulce y esponjoso cocinado en horno de leña, con sabor a coco. Tradicional de las comunidades creoles del Caribe nicaragüense.",
          ingredients: ["Harina de trigo", "Leche de coco", "Azúcar", "Levadura"],
          where: "Panaderías de Bluefields y Corn Island"
        }
      ],
      activities: ["Buceo en Corn Island", "Festival del Palo de Mayo en Bluefields", "Snorkel en Little Corn Island", "Paseos en lancha por la laguna", "Ecoturismo en Indio Maíz"],
      culture: "La Costa Caribe Sur tiene una mezcla cultural única: afrodescendientes creoles, indígenas miskitas, garífunas, mestizos. Esa diversidad se expresa en la música (palo de mayo, reggae, soca), en la comida (con coco, con mariscos) y en los idiomas que conviven en la misma calle.",
      experiences: [
        "Bucear en los arrecifes de Little Corn Island",
        "Bailar palo de mayo en Bluefields en mayo",
        "Comer langosta fresca en Corn Island",
        "Escuchar reggae mientras el sol cae sobre el Caribe",
        "Navegar por la Laguna de Bluefields"
      ],
      tags: ["playa", "cultura", "naturaleza", "aventura"]
    }
  ],

  gastronomy: [
    {
      id: "gallo-pinto",
      name: "Gallo Pinto",
      category: "Plato principal",
      description: "El plato nacional de Nicaragua. Arroz y frijoles rojos fritos juntos, con sabor único que varía según quien lo cocine. Base de la alimentación diaria de todos los nicaragüenses.",
      ingredients: ["Arroz", "Frijoles rojos", "Cebolla", "Chiltoma", "Ajo", "Aceite"],
      region: "Nacional",
      departments: ["todos"],
      context: "En Nicaragua, el día no empieza bien sin gallo pinto. Se come en el desayuno, en el almuerzo y a veces en la cena. Con huevo, con queso, con carne. Solo.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhRUPHx2FBRwZnWKYmowCz3mzLSGrrTZ55PzFvdTa0w&s=10"
    },
    {
      id: "nacatamal",
      name: "Nacatamal",
      category: "Plato principal",
      description: "Masa de maíz rellena de carne, arroz, papas, vegetales y especias. Envuelta en hojas de plátano y cocinada al vapor. La cocina del fin de semana.",
      ingredients: ["Masa de maíz", "Cerdo o pollo", "Arroz", "Papas", "Chiltoma", "Tomate", "Hojas de plátano"],
      region: "Nacional",
      departments: ["todos"],
      context: "El nacatamal se come los sábados o domingos, con café o con chocolate caliente. Es un plato que toma horas de preparación y que reúne a las familias.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjlVQiL5NmrUvVQ53ThgOmjiuwLm3H9brlvN90leA9A&s=10"
    },
    {
      id: "vigoron",
      name: "Vigorón",
      category: "Plato principal",
      description: "Yuca cocida con chicharrón de cerdo crujiente y ensalada de repollo con tomate. Servido en hoja de plátano. El plato más emblemático de Granada.",
      ingredients: ["Yuca", "Chicharrón", "Repollo", "Tomate", "Vinagre", "Chile"],
      region: "Pacífico",
      departments: ["granada"],
      context: "El vigorón es el plato de Granada. Se come en el mercado, en el parque, en las calles. La combinación de texturas —la yuca blanda, el chicharrón crujiente, el repollo ácido— es perfecta.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkksMtD2tCb0xzT8L41NYdrDwAUuNjC9Vszm2YWtJ8Q&s=10"
    },
    {
      id: "quesillo",
      name: "Quesillo",
      category: "Comida callejera",
      description: "Tortilla de maíz con queso suave, crema, cebolla curtida y sal. Enrollada en bolsa plástica. El snack más popular del Pacífico norte.",
      ingredients: ["Tortilla de maíz", "Queso suave", "Crema", "Cebolla", "Vinagre", "Sal"],
      region: "Pacífico Norte",
      departments: ["leon", "chinandega"],
      context: "El mejor quesillo se come en Nagarote, entre León y Managua. Las vendedoras lo preparan frente a uno, con la tortilla todavía caliente del comal.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iHa3uG-KAU6s0S9OkeZmcgQk0pYF9zIzlQdz7QVaeg&s=10"
    },
    {
      id: "rondon",
      name: "Rondón",
      category: "Comida caribeña",
      description: "Plato emblemático del Caribe nicaragüense. Pescado, mariscos, yuca, quequisque y verduras cocinados en leche de coco. Completamente diferente a la cocina del Pacífico.",
      ingredients: ["Pescado", "Mariscos", "Leche de coco", "Yuca", "Quequisque", "Chile", "Verduras"],
      region: "Caribe",
      departments: ["costa-caribe-norte", "costa-caribe-sur"],
      context: "El rondón es la mejor manera de entender que Nicaragua tiene dos gastronomías. El coco lo cambia todo: el color, el sabor, el aroma. No tiene nada que ver con el gallo pinto, y eso es lo más interesante.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiKWumOTLahGeSzSoTa-F-Af0ryXx0tyVnpsfg1g1Aw&s=10"
    },
    {
      id: "indio-viejo",
      name: "Indio Viejo",
      category: "Plato principal",
      description: "Guiso de masa de maíz con carne de res desmenuzada, tomate, cebolla, chiltoma y especias. Tiene raíces precolombinas.",
      ingredients: ["Masa de maíz", "Carne de res", "Tomate", "Cebolla", "Chiltoma", "Achiote"],
      region: "Nacional",
      departments: ["rivas", "granada", "masaya"],
      context: "El indio viejo es un guiso que se espesa con la masa de maíz. El nombre hace referencia a su origen prehispánico. Es un plato de paciencia.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPIngZH0Lb7aZ85nAn_PW6UAIxUk2sQ-qsbar6s3uxMQ&s=10"
    },
    {
      id: "pinolillo",
      name: "Pinolillo",
      category: "Bebida",
      description: "Bebida a base de maíz tostado y cacao molido. Espesa, nutritiva y con sabor profundo. Símbolo de la identidad nicaragüense.",
      ingredients: ["Maíz tostado", "Cacao", "Canela", "Azúcar", "Agua o leche"],
      region: "Nacional",
      departments: ["todos"],
      context: "Cuando alguien dice 'soy pinolero', está diciendo que es nicaragüense. El pinolillo no es solo una bebida; es una identidad.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeXFYaAFqUoZNa5MlaFcbXGrTzN932z5iIQAS5PJh5g&s=10"
    },
    {
      id: "guirilas",
      name: "Güirilas",
      category: "Comida tradicional",
      description: "Tortillas de maíz tierno, suaves y ligeramente dulces. Se sirven con queso fresco, crema o cuajada.",
      ingredients: ["Maíz tierno", "Sal", "Queso fresco", "Crema"],
      region: "Pacífico",
      departments: ["masaya", "granada", "carazo"],
      context: "Las güirilas son el sabor del maíz tierno sin procesar. En los meses de cosecha (agosto-octubre), aparecen en todos los comedores del Pacífico.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVFUK5CsgIaA07A6Ykgxy8WsNN54OAev9Q5xG8g6CDw&s=10"
    }
  ],

  activities: [
    { id: "surf", name: "Surf", icon: "🏄", departments: ["rivas", "leon", "carazo", "chinandega"] },
    { id: "senderismo", name: "Senderismo", icon: "🥾", departments: ["esteli", "jinotega", "matagalpa", "rivas", "leon", "rio-san-juan", "madriz", "nueva-segovia"] },
    { id: "sandboarding", name: "Volcano Boarding", icon: "🏂", departments: ["leon"] },
    { id: "kayak", name: "Kayak", icon: "🚣", departments: ["granada", "rivas", "jinotega", "rio-san-juan", "chinandega", "masaya"] },
    { id: "buceo", name: "Buceo", icon: "🤿", departments: ["costa-caribe-sur"] },
    { id: "observacion-aves", name: "Observación de aves", icon: "🦜", departments: ["jinotega", "matagalpa", "esteli", "rio-san-juan", "costa-caribe-norte"] },
    { id: "agroturismo", name: "Agroturismo", icon: "☕", departments: ["jinotega", "matagalpa", "esteli", "nueva-segovia", "madriz"] },
    { id: "gastronomia", name: "Gastronomía", icon: "🍽️", departments: ["managua", "granada", "masaya", "leon", "costa-caribe-sur"] },
    { id: "artesania", name: "Artesanía", icon: "🏺", departments: ["masaya", "boaco", "chontales"] },
    { id: "historia", name: "Historia colonial", icon: "🏛️", departments: ["granada", "leon", "managua", "rio-san-juan"] }
  ],

  travelerTypes: {
    aventura: {
      label: "Soy de Aventura",
      icon: "⚡",
      description: "Buscas adrenalina, retos físicos y lugares que cuesten un poco llegar.",
      departments: ["leon", "rivas", "madriz", "matagalpa", "rio-san-juan", "chinandega"]
    },
    playa: {
      label: "Soy de Playa",
      icon: "🌊",
      description: "El mar, la arena y el horizonte son tu idea de un buen día.",
      departments: ["rivas", "leon", "carazo", "chinandega", "costa-caribe-sur"]
    },
    historia: {
      label: "Soy de Historia",
      icon: "🏛️",
      description: "Te interesan los lugares que cuentan de dónde venimos.",
      departments: ["granada", "leon", "managua", "rio-san-juan", "chontales"]
    },
    comida: {
      label: "Soy de Comida",
      icon: "🍽️",
      description: "Viajas con el estómago y preguntas primero qué se come aquí.",
      departments: ["masaya", "granada", "managua", "leon", "costa-caribe-sur"]
    },
    naturaleza: {
      label: "Soy de Naturaleza",
      icon: "🌿",
      description: "Los bosques, los ríos y la fauna son tu tipo de destino.",
      departments: ["jinotega", "matagalpa", "esteli", "rio-san-juan", "costa-caribe-norte"]
    },
    cultura: {
      label: "Soy de Cultura",
      icon: "🎭",
      description: "Te interesa la gente, sus tradiciones, su música y su forma de vivir.",
      departments: ["masaya", "granada", "carazo", "costa-caribe-norte", "costa-caribe-sur"]
    },
    tranquilidad: {
      label: "Soy de Tranquilidad",
      icon: "🧘",
      description: "Buscas desconectarte sin renunciar a la belleza.",
      departments: ["rivas", "jinotega", "madriz", "boaco", "nueva-segovia"]
    }
  },

  itineraries: [
    {
      id: "un-dia-leon",
      title: "Un día en León",
      department: "leon",
      schedule: [
        { time: "07:00", activity: "Desayuno", description: "Gallo pinto, huevo y café en un comedor del mercado central" },
        { time: "09:00", activity: "Visita al Centro Histórico", description: "Subir al techo de la Catedral y ver León desde arriba" },
        { time: "11:00", activity: "León Viejo", description: "Las ruinas del Patrimonio de la Humanidad a 30 km de la ciudad" },
        { time: "13:00", activity: "Almuerzo", description: "Quesillo en Nagarote de regreso a León" },
        { time: "15:00", activity: "Cerro Negro", description: "Subida al volcán negro (2 horas de caminata en calor intenso)" },
        { time: "18:00", activity: "Regreso y limpieza", description: "Volver cargado de arena volcánica negra" },
        { time: "20:00", activity: "Cena", description: "Carne asada y bebidas en el barrio artístico" }
      ]
    },
    {
      id: "un-dia-granada",
      title: "Un día en Granada",
      department: "granada",
      schedule: [
        { time: "07:00", activity: "Desayuno", description: "Vigorón temprano en el mercado municipal" },
        { time: "09:00", activity: "Centro histórico", description: "Parque Central, Catedral y Convento San Francisco" },
        { time: "11:00", activity: "Isletas", description: "Tour en lancha por las 365 isletas del Lago Cocibolca" },
        { time: "13:00", activity: "Almuerzo", description: "Almuerzo en restaurante frente al lago" },
        { time: "15:00", activity: "Mombacho", description: "Subida a la Reserva Natural del volcán (o canopy)" },
        { time: "17:30", activity: "Atardecer", description: "Ver el sol caer sobre el lago desde el malecón" },
        { time: "19:30", activity: "Cena", description: "Cena en la calle La Calzada" }
      ]
    },
    {
      id: "un-dia-masaya",
      title: "Un día en Masaya",
      department: "masaya",
      schedule: [
        { time: "08:00", activity: "Desayuno", description: "Güirilas con queso y crema en el mercado" },
        { time: "09:30", activity: "Mercado de Artesanías", description: "Recorrer el mercado, hablar con artesanos, comprar (o no)" },
        { time: "11:30", activity: "Parque Nacional Volcán Masaya", description: "Llegar al borde del cráter activo" },
        { time: "13:30", activity: "Almuerzo", description: "Comida local en comedores cercanos al parque" },
        { time: "15:00", activity: "Laguna de Apoyo", description: "Nadar o kayak en la laguna cratérica" },
        { time: "17:30", activity: "Catarina", description: "Ver la laguna desde el mirador al atardecer" },
        { time: "19:00", activity: "Regreso", description: "De vuelta con artesanías, fotos y arena volcánica" }
      ]
    }
  ],

  postcards: [
    {
      category: "Un olor",
      content: "El olor a tortilla recién puesta en el comal. Desde la calle no sabes exactamente de qué casa sale, pero tu cuerpo lo sabe antes que tu mente.",
      related: "Mercados de Nicaragua"
    },
    {
      category: "Un sonido",
      content: "La pólvora de las fiestas patronales. Una explosión que anuncia alegría. En Nicaragua, el ruido no siempre da miedo.",
      related: "Fiestas patronales"
    },
    {
      category: "Un sabor",
      content: "El primer sorbo de pinolillo frío. Denso, con cacao, con maíz. No sabe a nada que hayas probado antes. Sabe a Nicaragua.",
      related: "Gastronomía nicaragüense"
    },
    {
      category: "Una tradición",
      content: "La Purísima de diciembre: altares, cohetes, aguinaldos de dulces y la pregunta que une a todos: '¿Quién causa tanta alegría?'",
      related: "Tradiciones de Nicaragua"
    },
    {
      category: "Un paisaje",
      content: "El perfil del Volcán Concepción desde el lago, al atardecer, con el cielo naranja y la silueta perfecta del cono volcánico. Entiendes por qué la gente se queda a vivir aquí.",
      related: "Isla de Ometepe, Rivas"
    },
    {
      category: "Una frase",
      content: "'Aquí la vida es sabrosa.' No es un eslogan. Es algo que alguien te dice mientras te pasa un plato de comida que no esperabas.",
      related: "Cultura nicaragüense"
    }
  ]
};

// Exposición global
window.NICARAGUA_DATA = NICARAGUA_DATA;



