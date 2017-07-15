library(tidyverse)
library(rvest)
library(stringr)
library(scales)
library(ggrepel)
library(ggmap)

load("scraped_bk.RData")
load("scraped_vl.RData")

ggplot(scraped_vl, aes(x=lat, y =long, color=price>4500000)) + geom_point() +
  geom_label_repel(aes(label = road_name), size = 1.5)

vl_bbox <- make_bbox(lon = scraped_vl$lat, lat = scraped_vl$long, f = .1) 
vl_map <- get_map(location = vl_bbox, maptype = "hybrid", source = "google")

ggmap(vl_map) +
  geom_point(data = scraped_vl, aes(x=lat, y=long, color = price)) +
  scale_color_gradientn(colours = rev(rainbow(7)), label = comma) 

ggmap(vl_map) +
  geom_point(data = scraped_vl, aes(x=lat, y=long, color = price/sqm)) +
  scale_color_gradientn(colours = rev(rainbow(7)))



# Værløse -----------------------------------------------------------------

ggplot(scraped_vl, aes(x = sqm, y = price)) + 
  geom_point(aes(color = factor(rooms>4))) +
  scale_y_continuous(labels = comma, breaks = seq(2000000, 10000000, 1000000)) +
  geom_smooth(method = "lm")

ggplot(scraped_vl, aes(x = sqm_lot, y = price)) + 
  geom_point(aes(color = factor(rooms))) +
  scale_y_continuous(labels = comma, breaks = seq(2000000, 10000000, 1000000)) +
  scale_x_continuous(limits = c(0,1500)) +
  geom_smooth(method = "lm")

ggplot(scraped_vl, aes(x = time, y = price)) + 
  geom_point(aes(color = factor(rooms))) +
  scale_y_continuous(labels = comma, breaks = seq(2000000, 10000000, 1000000)) +
  #  scale_x_continuous(limits = c(0,1500)) +
  geom_smooth(method = "lm")

ggplot(scraped_vl, aes(y = price/sqm, x = sqm)) + 
  geom_point(aes(color = factor(rooms))) +
  scale_y_continuous(labels = comma) +
  scale_x_continuous(limits = c(100,250)) +
  geom_smooth(method = "lm", formula = "y ~ poly(x, degree = 3)")


# Birkerød ----------------------------------------------------------------

ggplot(scraped_bk, aes(x = sqm, y = price)) + 
  geom_point(aes(color = factor(rooms>4))) +
  scale_y_continuous(labels = comma, breaks = seq(2000000, 10000000, 1000000)) +
  scale_x_continuous(limits = c(100,250)) +
  geom_smooth(method = "lm")

ggplot(scraped_bk, aes(y = price/sqm, x = sqm)) + 
  geom_point(aes(color = factor(rooms))) +
  scale_y_continuous(labels = comma) +
  scale_x_continuous(limits = c(100,250)) +
  geom_smooth(method = "lm", formula = "y ~ poly(x, degree = 3)")





