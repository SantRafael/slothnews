<?php
    $newsJson = file_get_contents('news.json');
    $slideContainer = file_get_contents('resources/slideContainer.html');
    $slideNews = file_get_contents('resources/slideNews.html');

    $news = json_decode($newsJson);

    function getNews($news, $slideNews){
        $techtudo  = $news->techtudo;
        $tecmundo  = $news->tecmundo;
        $infomoney = $news->infomoney;

        
        $htmlFinal = '';
        

        $cont = count($techtudo);

        for($i = 0; $i < $cont; $i++ ){
            $iMateria = $i+1;
            $class = "materia$iMateria fadeIn";
            if($i > 0)
                $class .= " mySlides";  

            $html = $slideNews;
            $html = str_replace('#class',  $class,  $html);
            $html = str_replace('#siteImg',  'techtudoImg',  $html);
            $html = str_replace('#site',     'TECHTUDO',      $html);
            $html = str_replace('#urlImg',   $techtudo[$i]->img,   $html);
            $html = str_replace('#title',    $techtudo[$i]->texto, $html);
            $htmlFinal .= $html;            
        }
        return $htmlFinal;
    }

    $slides = getNews($news, $slideNews);
    echo str_replace('#slides', $slides, $slideContainer);