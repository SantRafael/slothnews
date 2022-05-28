<?php
    $newsJson = file_get_contents('news.json');
    $slideContainer = file_get_contents('resources/slideContainer.html');
    $slideNews = file_get_contents('resources/slideNews.html');

    $news = json_decode($newsJson);

    function mountHtml($html, $site, $class, $i, $nameSite){
        $html = str_replace('#class',         $class,                $html);
        $html = str_replace('#siteImg',       $nameSite.'Img',       $html);
        $html = str_replace('#siteTextColor', $nameSite.'TextColor', $html);
        $html = str_replace('#site',          strtoupper($nameSite), $html);
        $html = str_replace('#urlImg',        $site[$i]->img,        $html);
        $html = str_replace('#title',         $site[$i]->texto,      $html);
        
        return $html; 
    }

    function extractNews($slideNews, $site, $count, $nameSite){
        $htmlFinal = '';
        for($i = 0; $i < $count; $i++ ){
            $iMateria = $i+1;

            $class = "materia$iMateria fadeIn";
            if($i > 0)
                $class .= " mySlides";
            
            $html = $slideNews;
            $htmlFinal .= mountHtml($html, $site, $class, $i, $nameSite);
        }

        return $htmlFinal;
    }

    function mountHtmlFinal($slide, $slideContainer){
        return str_replace('#slides', $slide, $slideContainer);
    }

    function getNews($news, $slideNews, $slideContainer){
        $techtudo  = $news->techtudo;
        $tecmundo  = $news->tecmundo;
        $infomoney = $news->infomoney;

        $techtudoHtml  = extractNews($slideNews, $techtudo,  count($techtudo),  'techtudo');
        $tecmundoHtml  = extractNews($slideNews, $tecmundo,  count($tecmundo),  'tecmundo');
        $infomoneyHtml = extractNews($slideNews, $infomoney, count($infomoney), 'infomoney');

        $htmlFinal  = mountHtmlFinal($techtudoHtml, $slideContainer);
        $htmlFinal .= mountHtmlFinal($tecmundoHtml, $slideContainer);
        $htmlFinal .= mountHtmlFinal($infomoneyHtml, $slideContainer);

        return $htmlFinal;
    }

    echo getNews($news, $slideNews, $slideContainer);