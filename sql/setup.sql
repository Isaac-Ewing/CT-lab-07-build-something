DROP TABLE IF EXISTS num;

CREATE TABLE num {
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    value INTEGER NOT NULL
}