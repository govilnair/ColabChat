package org.colabos.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import org.colabos.model.Users;

@Repository
public interface UsersDAO 
{
	public void create(Users users);
	public void update(Users users);
	public void delete(Users users);
	public void deleteAll();
	public Users find(Users users);
	public List<Users> findAll();
}
