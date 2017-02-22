-- Q1 query sakila database and list all actors for the film ANNIE IDENTITY. 

-- what I did in my hand out

select first_name, last_name from actor where actor.actor_id in
(select actor_id from film_actor where film_id = 
	(select film_id from film where title = 'ANNIE IDENTITY'))
	
-- use join

select first_name, last_name from actor
join
(select actor_id from film_actor join
film
on
film_actor.film_id = film.film_id
where film.title = 'ANNIE IDENTITY') j
on actor.actor_id = j.actor_id

-- the simplest way
 select first_name, last_name
from actor a, film f, film_actor fa
where a.actor_id = fa.actor_id and f.film_id = fa.film_id
and title = 'ANNIE IDENTITY'


-- Q2 build SQL query which will show film with largest count of the Actors. 

-- what I did in my hand out

select * from film where film_id = 
( select a.film_id from 
	(SELECT film_id, count(*) FROM `film_actor` group by film_id 
	  order by film_id limit 1) a 
	)
	
--	It was wrong, I actually meant

select * from film where film_id = 
( select a.film_id from 
	(SELECT film_id, count(*) n FROM `film_actor` group by film_id 
	  order by n desc limit 1) a 
	)

 -- use join
 
select f.film_id, f.title, j.n from film f
join (select film_id, count(*) n from film_actor group by film_id  
ORDER BY `n`  DESC limit 1) j
on f.film_id = j.film_id