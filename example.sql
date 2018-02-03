-- begin stduy 
-- postgres json doc:  https://www.postgresql.org/docs/9.5/static/functions-json.html
drop table if exists example1;

create table example1 (
  id serial not null primary key,
  info jsonb not null
);

INSERT INTO example1 (info)
values
 ( '{ "customer": "Lily Bush", "items": {"product": "Diaper","qty": 24}}' ),
 ('{ "customer": "John Doe", "items": {"product": "Beer","qty": 6}}'),
 ( '{ "customer": "Josh William", "items": {"product": "Toy Car","qty": 1}}' ),
 ( '{ "customer": "Mary Clark", "items": {"product": "Toy Train","qty": 2}}' )
;
insert into example1(info)
values
( '{ "customer": ["Mary Clark", "Mary Clark2"], "items": {"product": "Toy Train","qty": 2}}' )
;
select info ->> 'customer' from example1
;
select
  info -> 'customer' as customer, info->'items' ->> 'product' 
from example1
where info->'items' ->> 'product' = 'Diaper'
  and cast (
    info -> 'items' ->> 'qty' as integer
  ) > 2
;
SELECT
 MIN ( CAST ( info -> 'items' ->> 'qty' AS INTEGER ) ),
 MAX ( CAST ( info -> 'items' ->> 'qty' AS INTEGER ) ),
 SUM ( CAST ( info -> 'items' ->> 'qty' AS INTEGER ) ),
 AVG ( CAST ( info -> 'items' ->> 'qty' AS INTEGER ) )
FROM example1
where info ->> 'customer' like 'Jo%'   
;
; -- jsonb(data, path, value)
update example1
set info = jsonb_set(info, '{items, qty}', '34')
where info->'items' ->> 'product' = 'Diaper'
;
select * from example1 where info->'items' ->>'product' = 'Diaper'
;
delete from example1
where id = 2
;
table example1
;
-- postgres create index : https://www.postgresql.org/docs/9.1/static/sql-createindex.html
CREATE index idx_example_info ON example1 (info);
-- drop index: https://www.postgresql.org/docs/9.3/static/sql-dropindex.html
drop index idx_example_info;
;
-- index to json type:  https://www.postgresql.org/docs/9.4/static/datatype-json.html
CREATE INDEX idx_example_info_items_product ON example1 USING gin ((info -> 'items' -> 'product'));
;
-- end stduy

--
--
--
--



