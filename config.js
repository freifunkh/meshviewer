module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://stats.ffh.zone/dashboard/db/router-fur-meshviewer?var-node={NODE_ID}&from=now-12h&to=now-1m',
        'image': 'https://hannover.freifunk.net/karte-statistik.jpg',
        'title': 'Statistiken im neuen Fenster öffnen'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://harvester.ffh.zone/'
    ],
    'siteName': 'Freifunk Hannover',
    'mapLayers': [
      {
        'name': 'OpenStreetMap',
        'url': 'https:///tiles.ffh.zone/{z}/{x}/{y}.png',
        'config': {
          'attribution': '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          'maxZoom': 19
        }
      },
      {
        'name': 'Esri.WorldStreetMap (Straßenkarte)',
        'url': 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
          'maxZoom': 19
        }
      },
      {
        'name': 'Esri.WorldImagery (Satellitenbilder)',
        'url': 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          'maxZoom': 19
        }
      },
      {
        'name': 'ÖPNV',
        'url': 'https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Tiles &copy; Memomaps.de, Data CC-BY-SA OpenStreetMap',
          'maxZoom': 18
        }
      },
      {
        'name': 'Stamen.TonerLite',
        'url': 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          'subdomains': 'abcd',
          'minZoom': 0,
          'maxZoom': 20
        }
      },
      {
        'name': 'Stamen.Watercolor',
        'url': 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          'subdomains': 'abcd',
          'minZoom': 1,
          'maxZoom': 16
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        52.654728,
        9.179077
      ],
      // Southeast
      [
        52.134331,
        10.149994
      ]
    ],
    'domainNames': [
      {
        'domain': 'ffh',
        'name': 'Freifunk Hannover'
      },
      {
        'domain': 'ffh.legacy',
        'name': 'Legacy'
      },
      {
        'domain': 'ffh.hameln',
        'name': 'Hameln'
      },
      {
        'domain': 'ffh.alfeld',
        'name': 'Alfeld'
      },
      {
        'domain': 'ffh.lenthe',
        'name': 'Lenthe'
      },
      {
        'domain': 'ffh.steinhude',
        'name': 'Steinhude'
      },
      {
        'domain': 'ffh.springe',
        'name': 'Springe'
      },
      {
        'domain': 'ffh.nordstadt',
        'name': 'Nordstadt'
      },
      {
        'domain': 'ffh.wunstorf',
        'name': 'Wunstorf'
      },
      {
        'domain': 'ffh.neustadt',
        'name': 'Neustadt'
      },
      {
        'domain': 'ffh.wettbergen',
        'name': 'Wettbergen'
      },
      {
        'domain': 'ffh.oberricklingen',
        'name': 'Oberricklingen'
      },
      {
        'domain': 'ffh.muehlenberg',
        'name': 'Mühlenberg'
      },
      {
        'domain': 'ffh.bornum',
        'name': 'Bornum'
      },
      {
        'domain': 'ffh.ricklingen',
        'name': 'Ricklingen'
      },
      {
        'domain': 'ffh.barsinghausen',
        'name': 'Barsinghausen'
      },
      {
        'domain': 'ffh.davenstedt',
        'name': 'Davenstedt'
      },
      {
        'domain': 'ffh.ahlem',
        'name': 'Ahlem'
      },
      {
        'domain': 'ffh.badenstedt',
        'name': 'Badenstedt'
      },
      {
        'domain': 'ffh.lindenmitte',
        'name': 'Linden Mitte'
      },
      {
        'domain': 'ffh.lindennord',
        'name': 'Linden Nord'
      },
      {
        'domain': 'ffh.lindensued',
        'name': 'Linden Süd'
      },
      {
        'domain': 'ffh.limmer',
        'name': 'Limmer'
      },
      {
        'domain': 'ffh.calenbergerneustadt',
        'name': 'Calenberger Neustadt'
      },
      {
        'domain': 'ffh.garbsen',
        'name': 'Garbsen'
      },
      {
        'domain': 'ffh.langenhagen',
        'name': 'Langenhagen'
      },
      {
        'domain': 'ffh.seelze',
        'name': 'Seelze'
      },
      {
        'domain': 'ffh.isernhagen',
        'name': 'Isernhagen'
      },
      {
        'domain': 'ffh.burgdorf',
        'name': 'Burgdorf'
      },
      {
        'domain': 'ffh.burgwedel',
        'name': 'Burgwedel'
      },
      {
        'domain': 'ffh.uetze',
        'name': 'Uetze'
      },
      {
        'domain': 'ffh.langenhagen',
        'name': 'Langenhagen'
      },
      {
        'domain': 'ffh.stoecken',
        'name': 'Stöcken'
      },
      {
        'domain': 'ffh.marienwerder',
        'name': 'Marienwerder'
      },
      {
        'domain': 'ffh.ledeburg',
        'name': 'Ledeburg'
      },
      {
        'domain': 'ffh.nordhafen',
        'name': 'Nordhafen'
      },
      {
        'domain': 'ffh.burg',
        'name': 'Burg'
      },
      {
        'domain': 'ffh.hainholz',
        'name': 'Hainholz'
      },
      {
        'domain': 'ffh.vahrenwald',
        'name': 'Vahrenwald'
      },
      {
        'domain': 'ffh.herrenhausen',
        'name': 'Herrenhausen'
      },
      {
        'domain': 'ffh.leinhausen',
        'name': 'Leinhausen'
      },
      {
        'domain': 'ffh.vinnhorst',
        'name': 'Vinnhorst'
      },
      {
        'domain': 'ffh.brinkhafen',
        'name': 'Brinkhafen'
      },
      {
        'domain': 'ffh.mitte',
        'name': 'Mitte'
      },
      {
        'domain': 'ffh.suedstadt',
        'name': 'Südstadt'
      },
      {
        'domain': 'ffh.bult',
        'name': 'Bult'
      },
      {
        'domain': 'ffh.zoo',
        'name': 'Zoo'
      },
      {
        'domain': 'ffh.wuelfel',
        'name': 'Wülfel'
      },
      {
        'domain': 'ffh.doehren',
        'name': 'Döhren'
      },
      {
        'domain': 'ffh.waldhausen',
        'name': 'Waldhausen'
      },
      {
        'domain': 'ffh.waldheim',
        'name': 'Waldheim'
      },
      {
        'domain': 'ffh.seelhorst',
        'name': 'Seelhorst'
      },
      {
        'domain': 'ffh.mittelfeld',
        'name': 'Mittelfeld'
      },
      {
        'domain': 'ffh.bemerode',
        'name': 'Bemerode'
      },
      {
        'domain': 'ffh.kirchrode',
        'name': 'Kirchrode'
      },
      {
        'domain': 'ffh.anderten',
        'name': 'Anderten'
      },
      {
        'domain': 'ffh.wuelferode',
        'name': 'Wülferode'
      },
      {
        'domain': 'ffh.laatzen',
        'name': 'Laatzen'
      },
      {
        'domain': 'ffh.sehnde',
        'name': 'Sehnde'
      },
      {
        'domain': 'ffh.sarstedt',
        'name': 'Sarstedt'
      },
      {
        'domain': 'ffh.pattensen',
        'name': 'Pattensen'
      },
      {
        'domain': 'ffh.heideviertel',
        'name': 'Heideviertel'
      },
      {
        'domain': 'ffh.misburgnord',
        'name': 'Misburg Nord'
      },
      {
        'domain': 'ffh.misburgsued',
        'name': 'Misburg Süd'
      },
      {
        'domain': 'ffh.kleefeld',
        'name': 'Kleefeld'
      },
      {
        'domain': 'ffh.grossbuchholz',
        'name': 'Groß-Buchholz'
      },
      {
        'domain': 'ffh.lahe',
        'name': 'Lahe'
      },
      {
        'domain': 'ffh.bothfeld',
        'name': 'Bothfeld'
      },
      {
        'domain': 'ffh.sahlkamp',
        'name': 'Sahlkamp'
      },
      {
        'domain': 'ffh.vahrenheide',
        'name': 'Vahrenheide'
      },
      {
        'domain': 'ffh.list',
        'name': 'List'
      },
      {
        'domain': 'ffh.oststadt',
        'name': 'Oststadt'
      },
      {
        'domain': 'ffh.lehrte',
        'name': 'Lehrte'
      },
      {
        'domain': 'ffh.isernhagensued',
        'name': 'Isernhagen Süd'
      },
      {
        'domain': 'ffh.umland',
        'name': 'Umland'
      },
      {
        'domain': 'ffh.wennigsen',
        'name': 'Wennigsen'
      },
      {
        'domain': 'ffh.gehrden',
        'name': 'Gehrden'
      },
      {
        'domain': 'ffh.hemmingen',
        'name': 'Hemmingen'
      },
      {
        'domain': 'ffh.ronnenberg',
        'name': 'Ronnenberg'
      },
      {
        'domain': 'ffh.peinewest',
        'name': 'Peine West'
      },
      {
        'domain': 'ffh.hildesheim',
        'name': 'Hildesheim'
      },
      {
        'domain': 'ffh.nienburg',
        'name': 'Nienburg'
      },
      {
        'domain': 'ffh.obernkirchen',
        'name': 'Obernkirchen'
      },
      {
        'domain': 'ffh.schwarmstedt',
        'name': 'Schwarmstedt'
      },
      {
        'domain': 'ffh.special_port',
        'name': 'Special Port'
      },
      {
        'domain': 'ffh.leetfeld',
        'name': 'Leetfeld'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': '/wiki/Freifunk/Impressum'
      }
    ]
  };
};
