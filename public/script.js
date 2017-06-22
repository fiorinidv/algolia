var algoliasearch;

var client = algoliasearch('WKRE326CU8', '86ab725a5bb1204a39e13d264f16b37e');

var index = client.initIndex('getstarted_actors');



index.search('Nicolas', function(err, content) {
  console.log(content.hits);
});

autocomplete('#aa-search-input',
{ hint: false }, {
    source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
    //value to be displayed in input control after user's suggestion selection
    displayKey: 'name',
    //hash of templates used when rendering dataset
    templates: {
        //'suggestion' templating function used to render a single suggestion
        suggestion: function(suggestion) {
          return '<span>' +
            suggestion._highlightResult.name.value + '</span><span>' +
            suggestion._highlightResult.team.value + '</span>';
        }
    }
});

