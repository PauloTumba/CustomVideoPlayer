<script>
    $(function() {

        async $('div[id^="op_"]').each(function() {
            let valor = this.id;
            id_string = valor.replace("op_", "");
            var id = parseInt(id_string);
            console.log(id); // here popup msg show your selected id

            $.getJSON("/url/" + id, function(data) {

                await data.forEach(function(cada) {                   
                    $(".aCoisa").html('<p href ="/' + cada.algumacoisa + '
                        'size ="576"></a>');


                });
            });

        });


    });
</script>

//em html
<div id="op_{{ $dado->id }}" class="aCoisa">

<a class="vid1  ">
</a>

</div>