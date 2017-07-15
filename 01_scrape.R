source("00_funcs.R")

library(tidyverse)
library(rvest)
library(stringr)
library(scales)
library(ggrepel)
library(ggmap)

files_vl <- dir("værløse/", pattern = "html", full.names = TRUE)
scraped_vl <- lapply(files_vl, scrape_url)
scraped_vl <- do.call("rbind", scraped_vl)
scraped_vl <- scraped_vl %>% 
  mutate(road_name = str_replace(road_name, pattern = fixed("Hareskovby,"), replacement = "")) %>% 
  mutate(road_name = str_replace(road_name, pattern = fixed("Blomsterkvarteret,"), replacement = "")) %>% 
  mutate(road_name = str_replace(road_name, pattern = fixed("Kirke Værløse,,"), replacement = ""))

files_bk <- dir("birkerød/", pattern = "html", full.names = TRUE)
scraped_bk <- lapply(files_bk, scrape_url)
scraped_bk <- do.call("rbind", scraped_bk)

# Get long/lad ------------------------------------------------------------
full_add <- paste0(scraped_vl$road_name, ", 3500 Værløse")
long_lat_list <- lapply(full_add, get_autcomplete_adress)
long_lat <- do.call("rbind", long_lat_list)
scraped_vl <- bind_cols(scraped_vl, long_lat)

# Get long/lad ------------------------------------------------------------
full_add <- paste0(scraped_bk$road_name, ", 3460 Birkerød")
long_lat_list <- lapply(full_add, get_autcomplete_adress)
long_lat <- do.call("rbind", long_lat_list)
scraped_bk <- bind_cols(scraped_bk, long_lat)



save(scraped_bk, file="scraped_bk.RData")
save(scraped_vl, file="scraped_vl.RData")





