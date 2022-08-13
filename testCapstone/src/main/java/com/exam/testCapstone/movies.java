package com.exam.testCapstone;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class movies {
	@Id
	private int id;
	private String moviename;
	private boolean moviestatus;
	private String info;
	private String pgrating;
	private String genre;
	private String tralier;
	private String movielang;
	
	@Override
	public String toString() {
		return "movies [id=" + id + ", moviename=" + moviename + ", moviestatus=" + moviestatus + ", info=" + info
				+ ", pgrating=" + pgrating + ", genre=" + genre + ", tralier=" + tralier + ", movielang=" + movielang
				+ "]";
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	public boolean isMoviestatus() {
		return moviestatus;
	}
	public void setMoviestatus(boolean moviestatus) {
		this.moviestatus = moviestatus;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getPgrating() {
		return pgrating;
	}
	public void setPgrating(String pgrating) {
		this.pgrating = pgrating;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getTralier() {
		return tralier;
	}
	public void setTralier(String tralier) {
		this.tralier = tralier;
	}
	public String getMovielang() {
		return movielang;
	}
	public void setMovielang(String movielang) {
		this.movielang = movielang;
	}
	
}
