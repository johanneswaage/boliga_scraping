scrape_url <- function(url)
{
  scraped_page <- read_html(url)
  
  road_name <- scraped_page %>% html_nodes("#searchtable .truncate") %>% html_text %>% 
    str_replace(pattern = fixed(","), "")
  
  price <- scraped_page %>% html_nodes("#searchtable .ePrice") %>% html_text %>% 
    str_replace_all(pattern = fixed("."), replacement = "") %>% 
    str_replace(pattern = fixed(" kr"), "") %>% as.integer
  
  rooms <- scraped_page %>% html_nodes("#SearchResultDiv .room p") %>% html_text %>% 
    as.integer
  
  sqm <- scraped_page %>% html_nodes(".sqmestate p") %>% html_text %>% 
    str_replace_all(pattern = fixed(" m²"), "") %>% 
    as.integer
  
  sqm_lot <- scraped_page %>% html_nodes(".sqmplot p") %>% html_text %>% 
    str_replace_all(pattern = fixed(" m²"), "") %>% 
    str_replace_all(pattern = fixed("."), "") %>% 
    as.integer
  
  time <- scraped_page %>% html_nodes(".time p") %>% html_text %>% 
    as.integer
  
  tbl <- tibble(road_name,
                price,
                rooms,
                sqm,
                sqm_lot,
                time)
}

get_autcomplete_adress <- function(adress)
{
  library(httr)
  message("Fetching lat/long for ", adress, "...")
  response <- GET("https://dawa.aws.dk/adresser/autocomplete", query = list(q = adress))
  if(response$status_code != 200) stop("No autocomplete received...")
  
  if (length(content(response, "parsed")))
  {
    url <- content(response, "parsed")[[1]]$adresse$href
    
    response_true <- GET(url)
    ct <- content(response_true, "parsed")
    
    add  <- ct$adressebetegnelse
    lat  <- ct$adgangsadresse$adgangspunkt$koordinater[[1]]
    long <- ct$adgangsadresse$adgangspunkt$koordinater[[2]]
    
    tibble(adresse = add, lat, long)
    
  } else
  {
    tibble(adresse = NA_character_, lat = NA_real_, long = NA_real_ )
  }
}