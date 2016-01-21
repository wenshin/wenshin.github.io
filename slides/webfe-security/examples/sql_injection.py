#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sqlite3

conn = sqlite3.connect('test.db')
c = conn.cursor()


def check_user_table():
    cur = c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='user'")
    return cur.fetchall()


def select_user(name):
    return c.execute("SELECT * FROM user WHERE name = '%s'" % name)

if not check_user_table():
    print 'init table'
    c.execute('CREATE TABLE user (id int, name text, email text, tel text)')
    c.execute("INSERT INTO user VALUES (1, 'victim1', 'v1@v.com', '123456778910')")
    c.execute("INSERT INTO user VALUES (2, 'victim2', 'v2@v.com', '123456778910')")
    conn.commit()

# select_user("victim1")
# select_user("victim1' OR name = 'victim2")
